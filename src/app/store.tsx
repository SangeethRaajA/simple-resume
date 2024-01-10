import { configureStore } from "@reduxjs/toolkit";
import {
  addResumeService,
  getAllResumesService,
  getResumeByIdService,
  updateResumeService,
  deleteResumeService,
} from "../api/service/resume";

export const store = configureStore({
  reducer: {},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
