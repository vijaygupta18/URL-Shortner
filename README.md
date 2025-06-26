# 🔗 URL Shortener

A sleek and simple URL shortener web application built with Node.js, Express, and MongoDB. Transform long URLs into short, shareable links with an elegant user interface.

![URL Shortener Demo](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)

## ✨ Features

- **🚀 Fast URL Shortening**: Convert long URLs into short, manageable links instantly
- **💾 Persistent Storage**: MongoDB integration for reliable data persistence
- **📱 Responsive Design**: Beautiful Bootstrap-powered UI that works on all devices
- **🎨 Modern Interface**: Clean, gradient-styled design with intuitive user experience
- **🔄 Recent URLs Display**: View the most recently shortened URL in a table format
- **🌐 Heroku Ready**: Configured for easy deployment with Procfile included

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: EJS templating, Bootstrap 4
- **ID Generation**: ShortID for unique URL identifiers
- **Deployment**: Heroku-ready configuration

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/URL-Shortner.git
   cd URL-Shortner
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up MongoDB**
   - Create a MongoDB database (local or cloud)
   - Update the `uri` variable in `app.js` with your MongoDB connection string:
   ```javascript
   const uri = "your-mongodb-connection-string";
   ```

4. **Run the application**
   ```bash
   node app.js
   ```
   
   The app will be available at `http://localhost:5000`

## 🚀 Usage

1. **Shorten a URL**:
   - Open the application in your browser
   - Enter a long URL in the input field
   - Click "Make it Short" button
   - Your shortened URL will appear in the table below

2. **Access shortened URLs**:
   - Click on any shortened URL to redirect to the original link
   - Share the short URL with others

## 📁 Project Structure

```
URL-Shortner/
│
├── app.js              # Main application server
├── package.json        # Dependencies and project info
├── Procfile           # Heroku deployment configuration
│
├── public/
│   └── url.js         # MongoDB schema for URL model
│
└── views/
    └── index.ejs      # Main page template
```

## 🔧 Key Components

### Backend (`app.js`)
- Express server setup with EJS templating
- MongoDB connection and configuration
- RESTful routes for URL shortening
- Database operations for storing and retrieving URLs

### Database Model (`public/url.js`)
- Mongoose schema for URL storage
- Automatic short ID generation using ShortID
- Full URL and shortened URL mapping

### Frontend (`views/index.ejs`)
- Responsive Bootstrap interface
- Form for URL input
- Dynamic table displaying shortened URLs
- Beautiful gradient background with custom styling

## 🌐 Deployment

### Heroku Deployment

1. **Create a Heroku app**
   ```bash
   heroku create your-app-name
   ```

2. **Set up MongoDB Atlas** (recommended for production)
   - Create a MongoDB Atlas account
   - Create a cluster and get the connection string
   - Add the connection string to your Heroku config vars

3. **Deploy**
   ```bash
   git push heroku main
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 TODO / Future Enhancements

- [ ] Add custom alias support
- [ ] Implement URL analytics and click tracking
- [ ] Add user authentication and URL management
- [ ] Include URL expiration dates
- [ ] Add QR code generation for shortened URLs
- [ ] Implement rate limiting and spam protection
- [ ] Add URL validation and safety checks

## 📄 License

This project is licensed under the ISC License - see the package.json file for details.

## 👨‍💻 Author

**Vijay** - [GitHub Profile](https://github.com/yourusername)

## 🙏 Acknowledgments

- Bootstrap for the responsive design framework
- ShortID for reliable unique identifier generation
- MongoDB for robust data storage
- Express.js for the lightweight web framework

---

⭐ Star this repository if you found it helpful! 