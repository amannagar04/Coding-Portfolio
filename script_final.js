// LeetCode Stats Fetch
const leetcodeSolved = document.getElementById("leetcodeQuestionsSolved");
const leetcodeBtn = document.getElementById("leetcodeBtn");
const leetcodeId = document.getElementById("leetcodeId");

const fetchLeetCodeData = () => {
    const leetcodeApiUrl = "https://leetcode-api-faisalshohag.vercel.app/" + leetcodeId.value;
    fetch(leetcodeApiUrl)
    .then(response => response.json())
    .then(data => {
        leetcodeSolved.innerText = data.totalSolved; // Adjust based on the actual JSON structure
    })
    .catch(error => console.error("Error:", error))
    .finally(() => console.log("LeetCode data fetched"));
};

leetcodeBtn.addEventListener("click", fetchLeetCodeData);

// GeeksforGeeks Stats Fetch
const gfgSolved = document.getElementById("gfgQuestionsSolved");
const gfgBtn = document.getElementById("gfgBtn");
const gfgId = document.getElementById("gfgId");

const fetchGFGData = () => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const gfgApiUrl = "https://geeks-for-geeks-stats-api.vercel.app/?raw=y&userName=" + gfgId.value;

    fetch(proxyUrl + gfgApiUrl)
    .then(response => response.json())
    .then(data => {
        gfgSolved.innerText = data.totalProblemsSolved; // Adjust based on the actual JSON structure
    })
    .catch(error => console.error("Error:", error))
    .finally(() => console.log("GFG data fetched"));
};

gfgBtn.addEventListener("click", fetchGFGData);
