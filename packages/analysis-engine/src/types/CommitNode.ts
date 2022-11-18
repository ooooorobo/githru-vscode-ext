import { CommitRaw } from "./CommitRaw";

// eslint-disable-next-line import/prefer-default-export
export class CommitNode {
  // eslint-disable-next-line no-useless-constructor
  constructor(public commit: CommitRaw, private stemId?: string) {}

  public setStemId(id: string) {
    this.stemId = id;
  }

  public getStemId(): string | undefined {
    return this.stemId;
  }

  public getCommit(): CommitRaw {
    return { ...this.commit };
  }
}
