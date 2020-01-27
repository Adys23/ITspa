export const treatmentsService = {

    getTreatments() {
      // pobiera liste wszystkich pokoi
      return fetch('http://localhost:3000/treatments')
        .then(response => response.json());
    }
  
  };