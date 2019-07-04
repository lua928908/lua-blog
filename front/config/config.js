const backServerURL = process.env.NODE_ENV === 'production' ? 'https://api.where-code.com' : 'http://localhost:8000';

export { backServerURL };