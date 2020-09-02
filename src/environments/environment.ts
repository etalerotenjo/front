export const host = 'http://localhost:8080';

export const environment = {
    production: false,
    base: '/', // Context base
    domain: 'localhost', // Cookie domain
    time_to_refresh: 30, // Time in seconds
    notification_duration: 10, // Notification duration in seconds
    expiration_token: 10, // Time in minutes
    mobile_size: 850, // Mobile size
    notification: {
      duration: 5000, // Time in millis
      position: 'top-right' // (top-left, top-center, top-right, bottom-left, bottom-right, bottom-center)
    },
    api: { // Rest-full api data
        create_customer_url: `${ host }/Customer/v1/insert`
      },

    };
