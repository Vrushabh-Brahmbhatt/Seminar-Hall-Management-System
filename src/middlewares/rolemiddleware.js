const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
      console.log("User Role:", req.user.role); // Log the user's role
      console.log("Allowed Roles:", allowedRoles); // Log the roles allowed for this route
  
      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: `Access denied` });
      }
      next();
    };
  };
  
module.exports=authorizeRoles;