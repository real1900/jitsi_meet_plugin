# jitsi_meet

Jitsi Meet Plugin support for web. 

## Support for WEB

To use this code in your project:

1. Clone this repo in a location near of your project.

2. Add the package in pubspec.yml file using `path` and the relative path for 'jitsi_meet' (see cloned repo)

```
  jitsi_meet_web: Any
    
```

3. Add the External JS into `index.html` into web folder of your project.

```
<script src="https://meet.jit.si/external_api.js" type="application/javascript"></script>
```

4. Import it
```
import 'package:jitsi_meet_web/jitsi_meet.dart';
```

## Example

https://github.com/real1900/jitsi_meet_plugin/tree/master/jitsi_meet/example
