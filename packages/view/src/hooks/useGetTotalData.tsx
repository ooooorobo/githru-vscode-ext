import { useState, useEffect } from "react";

import type { ClusterNode, GlobalProps } from "types";

import fakeData from "../fake-assets/cluster-nodes.json";
import ClusterData from "../common/model/ClusterData";

export const useGetTotalData = (): GlobalProps => {
  const [data, setData] = useState<ClusterNode[]>([]);
  const [clusterData] = useState<ClusterData>(new ClusterData());

  useEffect(() => {
    console.log("isProduction = ", window.isProduction);

    const clusterNodes: ClusterNode[] = (
      window.isProduction ? window.githruData : fakeData
    ) as ClusterNode[];

    setData(clusterNodes);
  }, []);

  useEffect(() => {
    clusterData?.setClusterNodes(data);
  }, [clusterData, data]);

  return { data, clusterData };
};
