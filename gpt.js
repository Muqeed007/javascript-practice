function createPerson(name, birthYear, siteName) {
    // Check if all properties are provided
    if (!name || !birthYear || !siteName) {
      return 'Invalid: Please provide all properties (name, birthYear, siteName)';
    }
  
    // Check if birthYear has exactly 4 digits
    if (birthYear.toString().length !== 4) {
      return 'Invalid: Birth year must be a 4-digit number';
    }
  
    // Construct the password
    let password = siteName.charAt(0).toUpperCase() + '#' + name + '@' + birthYear;
  
    return password;
  }
  
  // Example usage:
  let myPassword = createPerson('John Doe', 1992, 'exampleSite');
  console.log(myPassword);  // Output: ExampleSite#John Doe@1992
  
  // Example with missing property
  let invalidPerson = createPerson('Jane Smith', 1985);
  console.log(invalidPerson);  // Output: Invalid: Please provide all properties (name, birthYear, siteName)
  
  // Example with invalid birthYear
  let invalidBirthYear = createPerson('Alice Johnson', 12345, 'testSite');
  console.log(invalidBirthYear);  // Output: Invalid: Birth year must be a 4-digit number
  