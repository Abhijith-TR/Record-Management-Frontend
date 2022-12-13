# Record Management Frontend

- Web application to facilitate the viewing and management of academic records.
- Involves three levels of users i.e., the super admin, the admin and the user.
- Provides a GUI to use the record management API documented [here](https://github.com/Abhijith-TR/Record-Management-Backend).
- Note that the online app cannot be used unless you have been registered by the admin (in this case, me).

## How to setup on local machine

1. Run `npm install` to install all dependancies.
2. Change the urls in the various form folders in order to allow it to connect to a database (If you do not wish to set up your own backend, refer to the the record management API for setup).
3. Run `npm start` and the web application will open up.

## Known issues

- Password recovery is not possible. The database will store encrypted passwords (if you use the record management API) and not even the admin can know your passwords. The only way to recover is to delete the account and reset it.

## Additional Information

- The web application should be completely functional on mobile devices with proper scaling.
- If as a user you find ways to access tabs, update and config, let me know so that I can find a fix.
- Default passwords and other details can be found in the API readme.
