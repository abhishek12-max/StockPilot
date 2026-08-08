const checkSubscription = (...allowedPlans) => {
  return (req, res, next) => {

    const userPlan = req.user.plan || "FREE";
    if (!allowedPlans.includes(userPlan)) {
      return res.status(403).json({
        success: false,
        message: "Upgrade to PRO to use this feature."
      });
    }

    next();
  };
};

module.exports = checkSubscription;