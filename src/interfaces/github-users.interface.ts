import { GitHubUser } from "./gitbub-user.interface";

export interface GitHubUsersResp {
  total_count:        number;
  incomplete_results: boolean;
  items:              GitHubUser[];
}
