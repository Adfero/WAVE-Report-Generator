# WAVE Report generator

This is a tool designed to work with the [WAVE API](http://wave.webaim.org/api/)
provided by [WebAIM](http://webaim.org). When run, the tool accepts a command
line argument for a website domain, and optionally a config file path and an
output directory. (The reason for a config file is to store the WAVE API access
keys.) The tool then scan's the given website's Google XML Sitemap at
/sitemap.xml and submits each page to the WAVE API for processing. Finally, it
outputs a report of the API's feedback in the specified output folder.

## Install

```
# [sudo] npm install -g wave-report-generator
```

## Todo

* Verification of domain, config file, and output directory.
* Fetching and parsing of sitemap.xml file.
* API calls to WAVE API to generate raw report objects.
* Config file automated setup.
* More useful report classes such as CSV, HTML, etc.
