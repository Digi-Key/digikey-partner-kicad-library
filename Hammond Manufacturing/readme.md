Hammond Manufacturing Template Library
======

The Hammond Manufacturing Template Library is a comprehensive collection of board outlines in KiCad project template form to aid in the design of projects that fit in Hammond Manufacturing enclosures.<br>

<img src="https://github.com/Reid-L/digikey-partner-kicad-library/blob/master/Hammond%20Manufacturing/Box%20Templates/1553T/1553TT/meta/brd.PNG?raw=true" width="750"><img src="https://www.hammfg.com/files/products/1553t/1553t-pair.jpg">


After cloning the Digi-Key Partners KiCad Library into your favorite location there are two methods for using this template library:
1. Start a new project using the template selector.
2. Pull the PCB file into an existing project.

## Start a new project from template

1. Open KiCad
2. Click on the ***Create new project from template*** button or ***File>New...>Project from Template...*** (alternatively use the keyboard shortcut ***Ctrl+T***)<br>
![image|291x93](https://aws1.discourse-cdn.com/digikey/original/2X/5/5c47521ffd27090f897a77bab917aa2d0d30c353.png) 
3. Click on the ***User Templates*** tab.<br>
![image|258x93](https://aws1.discourse-cdn.com/digikey/original/2X/1/181b2417aa039e91a76234910276af068ce52e6f.png) 
4. Click on ***Browse*** in the lower right hand of the Project Template Selector window.<br>
![image|246x102](https://aws1.discourse-cdn.com/digikey/original/2X/3/31c9d5fa64f8e56ccee43ecd62b34376fad548a3.png) 
5. Navigate to the location where you stored the clone of ***digikey-partner-kicad-library***. Then into ***Hammond Manufacturing\Box Templates***. <br>

6. Locate the series of enclosures you would like to view the templates for, click once to highlight it, and click ***Select Folder***<br>
![image|690x223, 75%](https://aws1.discourse-cdn.com/digikey/optimized/2X/6/6d6f60e1d398d08b47481ecb78b4c050dd59e607_2_517x167.png) 
7. You can now select the different part numbers at the top of the window to see details in the viewer. Once an enclosure has been selected to start a project from, click ***OK***.<br>
![image|617x500](https://aws1.discourse-cdn.com/digikey/original/2X/5/5f86ed3cfced46b21201971c11977aa9cd34d316.png) 
8. Determine where you would like to store your new project and give it a name in the ***New Project Folder*** window. Click ***Save***<br>
![image|561x458](https://aws1.discourse-cdn.com/digikey/original/2X/f/f34494d6c8aef84a032bc913162b626d14bd7eb3.png) 

Your new project will be loaded with two files, a schematic and a PCB. The schematic will be empty and ready for you to create circuitry, just like an empty project. The PCB will be pre-loaded with the board outline recommended by Hammond of the enclosure you selected. The board outline is on the Edge.Cuts layer and the dimensions are placed on the Dwgs.User layer, allowing them to be easily shut off so they are out of the way for layout.

## Pull the PCB file into an existing project

If you have started work on a project, you can bring in the PCB file from one of these templates into your project, and start working on a PCB that has the board outline pre-loaded. The template PCB file can replace the one already in your project, or it can reside alongside another in the same project (this is not highly recommended, but KiCad can support more than one PCB in a project).

1. Locate the template file for the enclosure you would like to use, located in the cloned copy of the digikey-partner-kicad-library. Much like in step 5 above, but do this in a file explorer window.

2. Once inside of the template folder for the enclosure you would like to use, copy the PCB file and paste it into your project folder.

If you are going to replace the PCB that is in the project, it is recommended to delete the unwanted PCB file, and rename the template PCB file to the same name as the schematic.
