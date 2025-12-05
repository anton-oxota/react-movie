import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const BASE_URL = "https://api.themoviedb.org/3";
export const AUTHORIZATION =
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWNlYzI2ZTM5MGZkYTczODcyMWIyMDMzNWI0MDdiOCIsIm5iZiI6MTc1OTc0NTY3MC44MDE5OTk4LCJzdWIiOiI2OGUzOTY4NmNkMzcyYTRjZGRjMjI5NmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.GTCTsCDdw7c033jsf_ymOgT_oYcVJ-ailARUIAWqGyc";
