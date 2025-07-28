console.log("Environment variable CLINE_ANTHROPIC_API_KEY:", process.env.CLINE_ANTHROPIC_API_KEY ? "SET" : "NOT SET")
console.log("First 20 chars:", process.env.CLINE_ANTHROPIC_API_KEY?.substring(0, 20))
