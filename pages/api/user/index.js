import _, { get, startCase, toLower, some } from 'lodash';

import dbConnect from '../../../utils/dbConnect';
import User from '../../../models/User';

export default async function handler(
  req, 
  res
) {
  const {  body, method } = req;

  await dbConnect();
  switch (method) {

    case 'POST':
      // try {
        let { name, email, wallet, route } = body
        const exsitingUser = await User.find({
          email: email
        })
        if(_.isEmpty(exsitingUser)) {
          name = startCase(name)
          const created_at = new Date()
          const user = await User.create({wallet, name, email, route, created_at});
          return res.status(200).json({ success: true, message: 'Success', user: user});
        } else {
          return res.status(201).json({ success: true, message: 'Already Registered User', user: exsitingUser });
        }
      // } catch (error) {
      //   res.status(400).json({ success: false, message: error.message });
      // }
      break;

    case 'GET':
      // if (!req.user) {
      //   return res.status(401).end();
      // } else {
        const value = req.query.value;
        if (value) {
          const user = await User.findOne({
            $or: [
              {wallet: value},
              {email: value}
            ]
          })
          if(_.isEmpty(user)) {
              res.status(400).json({ success: false, message: "Not registered User" });
          } else {
            return res.status(200).json({ success: true, message: 'Success', user: user });
          }
        } else {
          res.status(400).json({ success: false, message: error.message });
        }
      // }
      
     
    break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
