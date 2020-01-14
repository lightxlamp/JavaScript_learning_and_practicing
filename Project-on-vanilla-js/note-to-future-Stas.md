https://stackoverflow.com/questions/4037939/powershell-says-execution-of-scripts-is-disabled-on-this-system

To run firebase init 

Do this steps again. If u will use Win10

Open Run Command/Console (Win + R)
Type: gpedit.msc (Group Policy Editor)
Browse to Local Computer Policy -> Computer Configuration -> Administrative Templates -> Windows Components 
                                                                                                    -> Windows Powershell.
Enable "Turn on Script Execution"
Set the policy as needed. I set mine to "Allow all scripts".