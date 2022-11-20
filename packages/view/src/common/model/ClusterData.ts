import type { ClusterNode } from "types";

export default class ClusterData {
  public clusterNodes: ClusterNode[] = [];

  public setClusterNodes(nodes: ClusterNode[]) {
    this.clusterNodes = nodes;
  }
}
