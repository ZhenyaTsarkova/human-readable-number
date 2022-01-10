module.exports = function toReadable(number) {
   let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   let dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   let result = '';
   if (number < 20) {
      result = units[number];
   } else if (number >= 20 && number < 100) {
      if (number.toString()[1] === '0') {
         result = dozens[Math.abs(number / 10)];
      } else {
         result = `${dozens[Math.floor(number / 10)]} ${units[Number(number.toString()[1])]}`;
      };
   }
   else if (number.toString().substr(-2) === '00') {
      result = `${units[Math.abs(number / 100)]} hundred`;
   }
   else if (number.toString()[1] === '0') {
      result = `${units[Math.floor(number / 100)]} hundred ${units[Number(number.toString()[2])]}`;
   }
   else if (number.toString()[1] === '1') {
      result = `${units[Math.floor(number / 100)]} hundred ${units[Number(number.toString().substr(-2))]}`;
   }
   else if (number.toString()[2] === '0') {
      result = `${units[Math.floor(number / 100)]} hundred ${dozens[Number(number.toString()[1])]}`;
   }
   else {
      result = `${units[Math.floor(number / 100)]} hundred ${dozens[Number(number.toString()[1])]} ${units[Number(number.toString()[2])]}`;
   };
   return result;
}
