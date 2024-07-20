import fs from 'fs';

function createTestData(csvFilePath) {
    try {
        const csvData = fs.readFileSync(csvFilePath, 'utf-8');
        const cityNames = csvData.split('\n').map(name => name.trim());
        return cityNames
    } catch (error) {
        console.error('Error reading CSV file:', error);
        throw error;
    }
}



export default createTestData;
