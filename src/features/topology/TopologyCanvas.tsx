'use client';

import React from 'react';
import type { ArchitectureEdge, ArchitectureNode } from '@/types/portfolio';
import styles from './TopologyCanvas.module.css';

interface TopologyCanvasProps {
  nodes: ArchitectureNode[];
  edges: ArchitectureEdge[];
  mode: 'preview' | 'interactive';
  selectedNodeId?: string;
  onSelectNode?: (nodeId: string) => void;
}

const NODE_W = 196;
const NODE_H = 66;

export function TopologyCanvas({
  nodes,
  edges,
  mode,
  selectedNodeId,
  onSelectNode,
}: TopologyCanvasProps) {
  const nodeMap = new Map(nodes.map((n) => [n.id, n]));
  const activeId = selectedNodeId ?? nodes[0]?.id;

  return (
    <div
      className={`${styles.canvasWrap} ${
        mode === 'preview' ? styles.previewWrap : styles.interactiveWrap
      }`}
    >
      <svg
        viewBox="0 0 1000 360"
        className={styles.svg}
        role="img"
        aria-label="System Architecture Topology Diagram"
      >
        <defs>
          <marker
            id={`arrow-${mode}`}
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 7 4 L 0 7 z" className={styles.arrowPath} />
          </marker>
          <marker
            id={`arrow-active-${mode}`}
            viewBox="0 0 8 8"
            refX="7"
            refY="4"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 1 L 7 4 L 0 7 z" className={styles.arrowActivePath} />
          </marker>
        </defs>

        {/* Orthogonal CAD-style Edges */}
        {edges.map((edge) => {
          const from = nodeMap.get(edge.from);
          const to = nodeMap.get(edge.to);
          if (!from || !to) return null;

          const startX = from.x + NODE_W / 2;
          const startY = from.y;
          const endX = to.x - NODE_W / 2;
          const endY = to.y;
          const midX = (startX + endX) / 2;

          const isConnected =
            mode === 'interactive' &&
            (edge.from === activeId || edge.to === activeId);

          const d = `M ${startX} ${startY} L ${midX} ${startY} L ${midX} ${endY} L ${endX} ${endY}`;

          return (
            <g key={`${edge.from}-${edge.to}`}>
              <path
                d={d}
                fill="none"
                strokeDasharray={edge.dashed ? '4 4' : undefined}
                markerEnd={`url(#${
                  isConnected ? `arrow-active-${mode}` : `arrow-${mode}`
                })`}
                className={isConnected ? styles.edgeActive : styles.edge}
              />
              {mode === 'interactive' && edge.protocol ? (
                <text
                  x={midX}
                  y={(startY + endY) / 2 - 7}
                  textAnchor="middle"
                  className={
                    isConnected ? styles.edgeLabelActive : styles.edgeLabel
                  }
                >
                  {edge.protocol}
                </text>
              ) : null}
            </g>
          );
        })}

        {/* Architectural Nodes */}
        {nodes.map((node) => {
          const isSelected = node.id === activeId;
          const left = node.x - NODE_W / 2;
          const top = node.y - NODE_H / 2;

          return (
            <g
              key={node.id}
              transform={`translate(${left}, ${top})`}
              className={
                mode === 'interactive' ? styles.nodeInteractive : styles.nodeStatic
              }
              onClick={
                mode === 'interactive' && onSelectNode
                  ? (e) => {
                      e.stopPropagation();
                      onSelectNode(node.id);
                    }
                  : undefined
              }
            >
              <rect
                width={NODE_W}
                height={NODE_H}
                className={isSelected ? styles.nodeBoxActive : styles.nodeBox}
              />
              {isSelected ? (
                <rect
                  x={10}
                  y={12}
                  width={6}
                  height={6}
                  className={styles.signalLed}
                />
              ) : null}
              <text
                x={isSelected ? 22 : 12}
                y={20}
                className={isSelected ? styles.nodeCodeActive : styles.nodeCode}
              >
                {`${node.code} // ${node.layer.toUpperCase()}`}
              </text>
              <text
                x={12}
                y={44}
                className={isSelected ? styles.nodeTitleActive : styles.nodeTitle}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
