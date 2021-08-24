import { configureStore } from "@reduxjs/toolkit";
import productChoiceReducer from "../screens/1.ProductChoice/productChoiceSlice";
import personalDetailsReducer from "../screens/2.PersonalDetails/personalDetailsSlice";
import marketingPreferencesReducer from "../screens/5.MarketingPreferences/MarketingPreferencesSlice";
import privacyPermissionsReducer from "../screens/6.PrivacyPermissions/PrivacyPermissionsSlice";

export const store = configureStore({
  reducer: {
    productChoiceSlice: productChoiceReducer,
    personalDetailsSlice: personalDetailsReducer,
    MarketingPreferencesSlice: marketingPreferencesReducer,
    PrivacyPermissionsSlice: privacyPermissionsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
