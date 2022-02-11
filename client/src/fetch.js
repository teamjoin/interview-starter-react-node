export const solveSudoku = async () => {
    const response = await fetch('http://localhost:8080/api');
    return response.json()
}
