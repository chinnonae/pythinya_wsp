# pythinya_wsp

### Prerequisite
1. Python 3.x
2. Prosgresql
3. Django  
    `
    OSX/Linux: pip3 install django
    `  
4. Django Rest Framework  
    `
    OSX/Linux: pip3 install djangorestframework
    `
5. Djagno-CORS-header   
    `
    OSX/Linux: pip3 install django-cors-headers
    `   

Note:
  For step 3-5 you can use `pip3 install -r requirements.txt` in the project directory



### Frontend
---

#### Preinstallation
  1. `cd frontend`
  2. `npm install`


#### Conventions
  1. All components (.jsx,..) are stored in `containers` folder.
  2. All services (.js,...) are stored in `js/services` folder.
  3. All libraries are stored in `js` folder.
  4. All stylesheets (.scss,css,...) are stored in `stylesheets` folder.
  5. After create new stylesheet file. You must import it in `stylesheets/index.js`
  6. file's name and directory's name must be snake-case with dash (-).
    - shared-components
    - auth-form
  7. No more `require`. We are providing Component Collecting Service.
  8. All image files are store in `assets` folder. Usage : `src="/assets/logo.svg"`.

#### Component Collecting Service.

  > Creating the component
  ```
  class Input extends React.Component { ... }
  cc.register('components.input', Input);
  ```

  <br/>
  > Requiring the component
  ```
  render() {
    var Input = cc.get('components.input');
    return (...)
  }
  ```

  `No more require(...) from path.`


#### Get started
  1. `npm start`
  2. Go to `http://localhost:8080`
