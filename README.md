# DemoTopNav
Navigate to product to snapshots at different stages of development.

Index page show a menu of 4 stages of development. 
- Latest build contains verasion when a build of the most recent push occurs. 
- Beta1 contains a link that will navigate to an existing site.
- Beta2 and Beta3 are meant to server up static sites from our express server. <br>
Use express route to conditionally maps relative static resources to root. (e.g. beta2 or beta3's relative css, images, js/bundles depending on which route was selected)
