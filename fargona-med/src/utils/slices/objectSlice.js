import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { objectAPI } from "../api";

export const getObject = createAsyncThunk("object/getObject", async () => {
  try {
    const response = await objectAPI.getObject();
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const getObjectById = createAsyncThunk("object/getObjectById", async (id) => {
  try {
    const response = await objectAPI.getObjectById(id);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const addObject = createAsyncThunk("object/addObject", async (body) => {
  try {
    const response = await objectAPI.addObject(body);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const editObject = createAsyncThunk("object/editObject", async (body, id) => {
  try {
    const response = await objectAPI.editObject(body, id);
    return response;
  } catch (error) {
    console.log(error);
  }
});

export const deleteObject = createAsyncThunk("object/deleteObject", async (id) => {
  try {
    const response = await objectAPI.deleteObject(id);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const objectSlice = createSlice({
  name: "objects",
  initialState: {
    objects: [],
    currentObjects: [],
    loadingStatus: "default",
  },
  reducers: {
    
  },
  extraReducers: {
    [getObject.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [getObject.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.objects = action.payload.data.data;
      }
    },

    [getObjectById.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [getObjectById.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.currentObjects = state.objects.filter(
          (i) => i._id === action.payload.data.data._id
        );
      }
    },

    [addObject.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [addObject.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.objects.push(action.payload.data.data);
      }
    },

    [editObject.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [editObject.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.objects = state.objects.map((i) => {
          if (i._id === action.payload?.data?.data?._id) {
            return action.payload?.data?.data;
          }

          return state.objects
        });
      }
    },

    [deleteObject.pending]: (state) => {
      if (state.loadingStatus === "default") {
        state.loadingStatus = "loading";
      }
    },
    [deleteObject.fulfilled]: (state, action) => {
      if (state.loadingStatus === "loading") {
        state.loadingStatus = "default";
        state.objects = state.objects.filter(i => i._id !== action.data.data._id);
      }
    },
  },
});

// export const {} = typeSlice.actions
export default objectSlice.reducer;
