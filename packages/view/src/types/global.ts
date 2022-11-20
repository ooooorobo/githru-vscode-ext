import type { ClusterNode } from "./NodeTypes.temp";
import type ClusterData from "../common/model/ClusterData";

export type GlobalProps = { data: ClusterNode[]; clusterData: ClusterData };
export type SelectedDataProps = ClusterNode[];
