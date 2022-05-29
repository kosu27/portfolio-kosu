import type { Users } from "@/apollo/graphql";

export type LoginUser = Pick<
  Users,
  | "id"
  | "display_id"
  | "name"
  | "profile"
  | "gender"
  | "email"
  | "image"
  | "created_at"
> | null;
