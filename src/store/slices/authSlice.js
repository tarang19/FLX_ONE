import { createSlice } from '@reduxjs/toolkit';
import users from '../../@core/FakeDB/users.json';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: JSON.parse(localStorage.getItem('user')) || null,  // Persist user across reloads
  },
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const foundUser = users.find((user) => user.email === email && user.password === password);

      if (foundUser) {
        state.user = { id: foundUser.id, name: foundUser.name, role: foundUser.role };
        localStorage.setItem('user', JSON.stringify(state.user)); // Store in localStorage
      } else {
        state.user = null;
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user'); // Remove from localStorage on logout
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
