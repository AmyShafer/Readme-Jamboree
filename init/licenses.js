var count = 0;   

function licenseInfo (licenseSelected) {  
  // the array of licenses the user can choose from
  const licenseChoices = [
    {
      name: 'MIT',
      badge: '[![MIT License](https://img.shields.io/static/v1?label=MIT&message=License&color=%23FFd600)](https://www.javascript.com)',
      section: 'MIT License - Copyright (c) [2022] - Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the Software), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: - The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. - THE SOFTWARE IS PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.',
    },
    {
      name: 'Apache License',
      badge: '[![Apache  License](https://img.shields.io/static/v1?label=Apache&message=License&color=%23FFd600)](https://www.apache.org/licenses/LICENSE-2.0)',
      section: 'Copyright [2022] - Licensed under the Apache License, Version 2.0 (the "License") - You may not use this file except in compliance with the License. You may obtain a copy of the License at - http://www.apache.org/licenses/LICENSE-2.0 - Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an AS IS BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.',
    },
    {
      name: 'GPL License', 
      badge: '[![GPL License](https://img.shields.io/static/v1?label=GPL&message=License&color=%23FFd600)](https://www.gnu.org/licenses/gpl-3.0.en.html)',
      section: 'GNU GENERAL PUBLIC LICENSE - Version 3, - Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/> - Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.'
    }
  ]    

  // loop through the licenses array and find a match with the selected license
  for (let i = 0; i < licenseChoices.length; i++) {
    const currentLicense = licenseChoices[i];
    if (count === 0 && currentLicense.name === licenseSelected) {
      count++;
      return i;
    } else if (currentLicense.name === licenseSelected) {
      return licenseChoices[i].name + '<br>'
      + licenseChoices[i].section + '<br>'
      + licenseChoices[i].badge;  
    }
  }  
} 

module.exports = licenseInfo;