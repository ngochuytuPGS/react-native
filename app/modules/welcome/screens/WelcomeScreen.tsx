import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { usePhotosContext } from '../../../contexts/PhotosContext';
import Welcome from '../components/Welcome/Welcome';

const WelcomeScreen = () => {
  return <Welcome />;
};

export default WelcomeScreen;
