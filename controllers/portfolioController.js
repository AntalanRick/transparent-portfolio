let portfolio = [];

exports.getPortfolio = (req, res) => {
    res.json(portfolio);
};

exports.createPortfolio = (req, res) => {
    const newItem = req.body;

    if (!newItem.title) {
        return res.status(400).json({ message: "Title is required" });
    }

    portfolio.push(newItem);

    res.json({
        message: "Portfolio added",
        data: newItem
    });
};