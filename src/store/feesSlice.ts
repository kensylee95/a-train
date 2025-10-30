import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeeSchedule } from "@/types/global";

interface FeesState {
  fees: FeeSchedule | null;
  loading: boolean;
  error: string | null;
}

const initialState: FeesState = {
  fees: null,
  loading: false,
  error: null,
};

// Async thunk to fetch fees
export const fetchFees = createAsyncThunk("fees/fetchFees", async () => {
  const res = await fetch("/api/get-fees", { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch fees");
  }
  const data = await res.json();
  return data as FeeSchedule;
});

const feesSlice = createSlice({
  name: "fees",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchFees.fulfilled,
        (state, action: PayloadAction<FeeSchedule>) => {
          state.loading = false;
          state.fees = action.payload;
          state.error = null;
        }
      )
      .addCase(fetchFees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch fees";
      });
  },
});

export default feesSlice.reducer;
