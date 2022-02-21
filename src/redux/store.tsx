import { configureStore } from "@reduxjs/toolkit";
import conditionSelectorReducer from "../ConditionSelector/ConditionSelectorSlice";
// import productChoiceReducer from "../screens/1.ProductChoice/productChoiceSlice";
// import personalDetailsReducer from "../screens/2.PersonalDetails/personalDetailsSlice";
// import marketingPreferencesReducer from "../screens/5.MarketingPreferences/MarketingPreferencesSlice";
// import privacyPermissionsReducer from "../screens/6.PrivacyPermissions/PrivacyPermissionsSlice";
import inLifeReducer from "../screens/InLife/InLifeSlice";
import { pageDurationStoreReducer } from "./pageDurationStore";

export const store = configureStore({
  reducer: {
    conditionSelector: conditionSelectorReducer,
    // productChoiceSlice: productChoiceReducer,
    // personalDetailsSlice: personalDetailsReducer,
    // MarketingPreferencesSlice: marketingPreferencesReducer,
    // PrivacyPermissionsSlice: privacyPermissionsReducer,
    InLifeSlice: inLifeReducer,
    pageDuration: pageDurationStoreReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
