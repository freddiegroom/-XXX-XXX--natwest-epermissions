import { configureStore } from "@reduxjs/toolkit";
import conditionSelectorReducer from "ConditionSelector/ConditionSelectorSlice";
import productChoiceReducer from "redux/productChoiceSlice";
import personalDetailsReducer from "redux/personalDetailsSlice";
import marketingPreferencesReducer from "redux/MarketingPreferencesSlice";
import privacyPermissionsReducer from "redux/PrivacyPermissionsSlice";
import inLifeReducer from "./InLifeSlice";
import { pageDurationStoreReducer } from "./pageDurationStore";

export const store = configureStore({
  reducer: {
    conditionSelector: conditionSelectorReducer,
    productChoiceSlice: productChoiceReducer,
    personalDetailsSlice: personalDetailsReducer,
    MarketingPreferencesSlice: marketingPreferencesReducer,
    PrivacyPermissionsSlice: privacyPermissionsReducer,
    InLifeSlice: inLifeReducer,
    pageDuration: pageDurationStoreReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
