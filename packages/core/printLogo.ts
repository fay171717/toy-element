export default function () {
    if (PROD) {
      const logo = `
_________________________________________________________________________________________
__________.__                         ___________.__                                __   
\______   \  | _____  ___.__.         \_   _____/|  |   ____   _____   ____   _____/  |_ 
 |     ___/  | \__  \<   |  |  ______  |    __)_ |  | _/ __ \ /     \_/ __ \ /    \   __\
 |    |   |  |__/ __ \\___  | /_____/  |        \|  |_\  ___/|  Y Y  \  ___/|   |  \  |  
 |____|   |____(____  / ____|         /_______  /|____/\___  >__|_|  /\___  >___|  /__|  
                    \/\/                      \/           \/      \/     \/     \/                            
_________________________________________________________________________________________
                                  author:Leonie
  `;
  
      const rainbowGradient = `
  background: linear-gradient(135deg, orange 60%, cyan);
  background-clip: text;
  color: transparent;
  font-size: 16px; 
  line-height: 1;
  font-family: monospace;
  font-weight: 600;
  `;
  
      console.info(`%c${logo}`, rainbowGradient);
    } else if (DEV) {
      console.log("[EricUI]:dev mode...");
    }
  }
  