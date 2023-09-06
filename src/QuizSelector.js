import React from 'react';

function QuizSelector(props) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          props.onFileLoaded(jsonData);
        } catch (err) {
          console.error("Error parsing the JSON file.");
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default QuizSelector;

