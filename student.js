// student.js

const getStudentFullName = (id) => {
    switch (id) {
        case 0: return "Michal Wisniewski";
        case 1: return "Kacper Nowaki";
        case 2: return "Maja Kowalska";
        default: return "Michal Wisniewski";
    }
  };
  
  const getStudentId = (id) => {
    switch (id) {
        case 0: return 333444;
        case 1: return 111222;
        case 2: return 222333;
        default: return 333444;
    } 
  };
  
  module.exports = {
    getStudentFullName,
    getStudentId,
  };
