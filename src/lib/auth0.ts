export async function signUpWithAuth0(email: string, password: string) {
  try {
    const res = await fetch('https://dev-pzlf83plp8g4fw4j.us.auth0.com/dbconnections/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.AUTH0_CLIENT_ID,
        email,
        password,
        connection: 'Username-Password-Authentication',
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || 'Sign up failed');
    }

    return data;
  } catch (error) {
    console.error('Signup error:', error);
    throw error;
  }
}

export async function changePasswordWithAuth0(email: string) {
  try {
    const res = await fetch('https://dev-pzlf83plp8g4fw4j.us.auth0.com/dbconnections/change_password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.AUTH0_CLIENT_ID,
        email,
        connection: 'Username-Password-Authentication',
      }),
      
    });

    const data = await res.text(); 

    if (!res.ok) {
      throw new Error(data);
    }

    return data;
  } catch (error) {
    console.error('Change password error:', error);
    throw error;
  }
}
