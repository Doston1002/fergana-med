import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { typeAPI } from "../api";

export const getType = createAsyncThunk("type/getType", async () => {
  try {
    const response = await typeAPI.getType();
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const getTypeById = createAsyncThunk("type/getTypeById", async (id) => {
  try {
    const response = await typeAPI.getTypeById(id);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const addType = createAsyncThunk("type/addType", async (body) => {
  try {
    const response = await typeAPI.addType(body);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const editType = createAsyncThunk("type/editType", async (body, id) => {
  try {
    const response = await typeAPI.editType(body, id);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const deleteType = createAsyncThunk("type/deleteType", async (id) => {
  try {
    const response = await typeAPI.deleteType(id);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const typeSlice = createSlice({
  name: "type",
  initialState: {
    types: [],
    currentTypes: [],
    loadingStatus: "default",
  },
  reducers: {},
  extraReducers: {
    [getType.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [getType.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.types = action.payload.data.data;
      }
    },

    [getTypeById.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [getTypeById.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.currentTypes = state.types.filter(
          (i) => i._id === action.payload.data.data._id
        );
      }
    },

    [addType]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [addType.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.types.push(action.payload.data.data)
        console.log(action.payload)
      }
    },

    [editType.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [editType.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.types = state.types.map((i) => {
          if (i._id === action.payload?.data?.data?._id) {
            return action.payload?.data?.data;
          }
          return state.types
        });

      }
    },

    [deleteType.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [deleteType.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.types = state.types.filter(i => i._id !== action.data.data._id);
      }
    },
  },
});

// export const {} = typeSlice.actions
export default typeSlice.reducer;
