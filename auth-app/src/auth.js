import React from 'react';
import axios from 'axios';

export default async function Authenticate() {
      try {
        await axios.get(`http://localhost:5000/`);
        return true;
      } catch (error) {
        return false;
      }
}