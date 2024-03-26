document.getElementById('generateBtn').addEventListener('click', async () => {
    const fileInput = document.getElementById('csvFile');
    const file = fileInput.files[0];
    
    if (file) {
        const formData = new FormData();
        formData.append('file', file);
        
        try {
            const response = await fetch('/generate', {
                method: 'POST',
                body: formData
            });
            
            // Parse JSON response
            const data = await response.json();
            
            // Check if data is array and format accordingly
            let formattedData = Array.isArray(data) ? JSON.stringify(data, null, 2) : data;

            // Display formatted data in result div
            document.getElementById('result').innerText = formattedData;
        } catch (error) {
            console.error('Error:', error);
        }
    } else {
        console.error('No file selected');
    }
});
