# Whatsapp Clone UI

This repository contains code for WhatsApp UI in ReactJS and Bootstrap.\
view demo: https://whatsapp.nythonore.me

### Prerequisites

Make sure you have already installed Docker Engine. You don’t need to install Nginx or YARN, as both are provided by Docker images.

```
$ docker -v
Docker version 20.10.7, build f0df350
```

### Installing

```
$ git clone https://github.com/nythonore/whatsapp-clone.git
```

```
$ cd whatsapp-clone
```

```
$ docker-compose -f docker-compose.prod.yml build
```

```
$ docker run -p 3000:80 --name whatsapp-prod whatsapp-prod
```

Go to [http://localhost:3000](http://localhost:3000)

### Built With

- [ReactJS](https://reactjs.org/) - Front-end Framework
- [React Bootstrap](https://react-bootstrap.github.io/) - CSS Framework
- [Nginx](https://nginx.org/en/) - Web Server
- [Docker](https://www.docker.com/) - Containerization

### Author

**Honore Niyitegeka** (https://nythonore.netlify.app)

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
