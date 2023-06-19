//const Discord = require('discord.js');
//const client = new Discord.Client();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	], })
	
const token = "";
let interval;

client.login(token);


client.on('ready', () => {
      console.log(`Logged in as ${client.user.tag}!`);
    })
	
	
	var help = "```-q0 [Comptia CYSA+ Certification Exam 10 Questions Part 1] \n-q1 [Comptia CYSA+ Certification Exam 10 Questions Part 2] \n-q2 [Comptia CYSA+ Certification Exam 10 Questions Part 3] \n-q3 [Linux Essentials 10 Questions Part 1] \n-q4 [Linux Essentials 10 Questions Part 2] \n-q5 [Comptia CYSA+ Certification Exam 10 Questions Part 4] \n-q6 [Comptia CYSA+ Certification Exam 10 Questions Part 5] \n-q7 [Linux Essentials 10 Questions Part 3] \n-q8 [Linux Essentials 10 Questions Part 4] \n-q9 [Linux Essentials 10 Questions Part 5] \n-q10 [Comptia CYSA+ Certification Exam 10 Questions Part 6] \n\n while the bot is expecting your answers from 0 to 3 if you want to quit the test then enter in 'quit'.```";
	var nomsg = false;
	var myID = null;
	var q;
	
	const users = 
	[
		
	];
	
	var q1 = [
	//q1
	[
	["A SOC analyst has detected the repeated usage of a compromised user credential on the company's email server. The analyst sends you an email asking you to check the server for any indicators of compromise since the email server is critical to continued business operations. Which of the following was likely overlooked by your organization during the incident response preparation phase?", 
	"Conduct training on how to search for indicators of compromise", 
	"Perform a data criticality and prioritization analysis", 
	"Develop a communications plan that includes provisions for how to operate in a compromised environment", 
	"Prepare a jump bag or kit for use in the investigation", 
	2,
	"OBJ-4.1: As part of your preparation phase, your organization should develop a communications plan that details which communication methods will be used during a compromise of various systems. If the analyst suspected the email server was compromised, then communications about the incident response efforts (including detection and analysis) should be shifted to a different communications path, such as encrypted chat, voice, or other secure means. Any analyst involved in working on this incident should have already have prepared alternate, out-of-band communications to prevent an adversary from intercepting or altering communications. Based on the scenario provided, it is clear that a data criticality and prioritization analysis was already performed since the email server is known to be critical to operations. Based on the scenario, there is nothing to indicate that the analysts do not know how to search for IoCs properly. Based on the information provided, nothing indicates that either analyst doesn’t have the appropriate tools needed, so it can be safely assumed they have their jump bag or kit available for use.",
	60000
	],
	
	["An organization has hired a cybersecurity analyst to conduct an assessment of its current security posture. The analyst begins by conducting an external assessment against the organization's network to determine what information is exposed to a potential external attacker. What technique should the analyst perform first?",
	"Intranet portal reviews",
	"Technical control audits",
	"DNS query log reviews",
	"Enumeration",
	3,
	"OBJ-1.3: Scanning and enumeration are used to determine open ports and identify the software and firmware/device types running on the host. This is also referred to as footprinting or fingerprinting. This technique is used to create a security profile of an organization by using a methodological manner to conduct the scanning. If this scan is conducted from outside of the organization’s network, it can be used to determine the network devices and information available to an unauthorized and external attacker. A DNS query log review, intranet portal review, or technical control audit would require internal access to the network, which is typically not accessible directly to an external attacker.",
	40000
	],
	
	["Which of the following is typically used to secure the CAN bus in a vehicular network?", 
	"Anti-virus", 
	"Endpoint protection", 
	"UEBA", 
	"Airgap", 
	3, 
	"OBJ-1.5: The majority of vehicles do not currently have a mechanism by which an attacker can access a vehicle remotely. However, there have been numerous demonstrations where the CAN bus can be accessed and corrupted through an available diagnostic port within the automobile or unmanned aerial vehicle. The most typical security measure used is an airgap between a vehicle's entertainment system (which may have internet access) and its CAN bus. Endpoint protection, anti-virus, and user and entity behavior analytics (UEBA) are not usually installed in vehicular networks as a security measure.",
	30000
	],
	
	["Which of the following is the correct usage of the tcpdump command to create a packet capture filter for all traffic going to and from the server located at 10.10.1.1?", 
	"tcpdump -i eth0 dst 10.10.1.1", 
	"tcpdump -i eth0 host 10.10.1.1", 
	"tcpdump -i eth0 proto 10.10.1.1", 
	"tcpdump -i eth0 src 10.10.1.1", 
	1, 
	"OBJ-4.4: Knowing tcpdump is an essential skill that will come in handy for any system administrator, network engineer, or security professional. The tcpdump tool is used to conduct packet capturing of network traffic. The host option specifies a filter to capture all traffic going to (destination) and from (source) the designated IP address. If the DST filter is used, this only captures data going to the designated IP address. If the SRC filter is used, this only captures data going from the designated IP. If the proto filter is used, this will capture all traffic going to or from a designated port, such as FTP if proto 21 was used.",
	30000
	],
	
	["Your company is making a significant investment in infrastructure-as-a-service (IaaS) hosting to replace its data centers. Which of the following techniques should be used to mitigate the risk of data remanence when moving virtual hosts from one server to another in the cloud?", 
	"Span multiple virtual disks to fragment data", 
	"Use data masking", 
	"Zero-wipe drives before moving systems", 
	"Use full-disk encryption", 
	3,
	"OBJ-1.6: To mitigate the risk of data remanence, you should implement full disk encryption. This method will ensure that all data is encrypted and cannot be exposed to other organizations or the underlying IaaS provider. Using a zero wipe is typically impossible because VM systems may move without user intervention during scaling and elasticity operations. Data masking can mean that all or part of a field's contents is redacted, by substituting all character strings with 'x,' for example. Data masking will not prevent your corporate data from being exposed by data remanence. Spanning multiple disks will leave the data accessible, even though it would be fragmented, and would make the data remanence problem worse overall.",
	40000
	],
	
	["Your organization has recently suffered a data breach due to a server being exploited. As a part of the remediation efforts, the company wants to ensure that the default administrator password on each of the 1250 workstations on the network is changed. What is the easiest way to perform this password change requirement?", 
	"Revoke the digital certificate", 
	"Create a new security group", 
	"Deploy a new group policy", 
	"Utilize the key escrow process", 
	2, 
	"OBJ-4.2: A group policy is used to manage Windows systems in a Windows network domain environment utilizing a Group Policy Object (GPO). GPOs can include many settings related to credentials, such as password complexity requirements, password history, password length, and account lockout settings. You can force a reset of the default administrator account password by using a group policy update.",
	40000
	],
	
	["Dion Consulting Group has been hired to analyze the cybersecurity model for a new videogame console system. The manufacturer's team has come up with four recommendations to prevent intellectual property theft and piracy. As the cybersecurity consultant on this project, which of the following would you recommend they implement first?", 
	"Ensure that each inficidual console has a unique key for decrypting individual licenses and tracking which console has purchased which game", 
	"Ensure that all games for the console are distributed as encrypted so that they can only be decrypted on the game console", 
	"Ensure that all screen capture content is visibly watermarked", 
	"Ensure that all games require excessive storage sizes so that it is difficult for unauthorized parties to distribute", 
	0, 
	"OBJ-2.2: Ensuring that each console has a unique key will allow the console manufacturer to track who has purchased which games when using digital rights management licensing. This can be achieved using a hardware root of trust, such as a TPM module in the processor. While encrypting the games during distribution will provide some security, the games could be decrypted and distributed by unauthorized parties if the encryption key were ever compromised. The recommendation of making the game arbitrarily large will frustrate both authorized and unauthorized, which could negatively impact sales, so it is a poor recommendation to implement. Visibly watermarking everything will only aggravate the user, provide a negative customer experience, and not help fight software piracy.",
	60000
	],
	
	["What document typically contains high-level statements of management intent?", 
	"Procedure", 
	"Guideline", 
	"Policy", 
	"Standard", 
	2, 
	"OBJ-5.3: Policies are high-level statements of management intent. Compliance with policies by employees should be mandatory. An information security policy will generally contain broad statements around the various cybersecurity objectives. Procedures describe exactly how to use the standards and guidelines to implement the countermeasures that support the policy. Standards and baselines describe specific products, configurations, or other mechanisms to secure the systems. A guideline is a recommendation that can specify the methodology that is to be used.",
	30000
	],
	
	["https://img-c.udemycdn.com/redactor/raw/quiz_question/2022-01-17_16-34-11-bb81daa80f08de252e284aa58bc787d6.png \n\n Which of the following ACL entries should be added to the firewall to allow only the Human Resources (HR) computer to have SMB access to the file server (Files)? \n\n (Note: The firewall in this network is using implicit deny to maintain a higher level of security. ACL entries are in the format of Source IP, Destination IP, Port Number, TCP/UDP, Allow/Deny.)", 
	"172.16.1.3, 192.168.1.12, ANY, TCP, ALLOW", 
	"172.16.1.3, 192.168.1.12, 445, TCP, ALLOW", 
	"172.16.1.12/24, 192.168.1.3/24, 445, TCP, ALLOW", 
	"192.168.1.12, 172.16.1.3, 445, UDP, DENY", 
	1, 
	"OBJ-3.2: The ACL should be created with 172.16.1.3 as the Source IP, 192.168.1.12 as the Destination IP, 445 as the port number operating over TCP, and the ALLOW condition set. This is the most restrictive option presented (only the HR and Files server are used), and the minimal number of ports are opened to accomplish our goal (only port 445 for the SMB service).",
	60000
	],
	
	["You are conducting a forensic analysis of a hard disk and need to access a file that appears to have been deleted. Upon analysis, you have determined that the file's data fragments exist scattered across the unallocated and slack space of the drive. Which technique could you use to recover the data?", 
	"Carving", 
	"Overwrite", 
	"Recovery", 
	"Hashing", 
	0, 
	"OBJ-4.4: File carving is the process of extracting data from an image when that data has no associated file system metadata. A file-carving tool analyzes the disk at the sector/page level. It attempts to piece together data fragments from unallocated and slack space to reconstruct deleted files or at least bits of information from deleted files. File carving depends heavily on file signatures or magic numbers—the sequence of bytes at the start of each file identifies its type. Hashing is a function that converts an arbitrary length string input to a fixed-length string output. Overwrite is a method of writing random bits or all zeros over a hard disk to sanitize it. Recovery is a generic term in forensics, cybersecurity incident response, and other portions of the IT industry, therefore it is not specific enough to be the correct option.",
	40000
	]
	]
	
	//q2
	];
	
	
	function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

client.on('messageCreate', message => {
	

	if(message.content.toLowerCase().startsWith("-clean")) {

		message.reply(help);
		async function wipe() {
        var msg_size = 100;
        while (msg_size == 100) {
            await message.channel.bulkDelete(100)
        .then(messages => msg_size = messages.size)
        .catch(console.error);
        }
        message.channel.send(`<@${message.author.id}>\n> ${message.content}`, { files: ['http://www.quickmeme.com/img/cf/cfe8938e72eb94d41bbbe99acad77a50cb08a95e164c2b7163d50877e0f86441.jpg'] })
    }
    wipe()
    }
	
	if(message.content.toLowerCase().startsWith("-q0"))
	{
			var player = [0, 0, message.author.username, 0, false];
			users.push(player);
			myID = (users.length - 1);
			users[myID][0] = 0;
			users[myID][1] = 0;
			randomQuestion = users[myID][1];
			q = users[myID][0];
			q1[q] = shuffle(q1[q]);
	}
	
	
	
	if(message.content.toLowerCase().startsWith("-q"))
	{
		const args = message.content.split(" ");
		
		const msg_filter = m => m.author.id === message.author.id;
		
		
		if(args[1] == "scores"){
			//message.delete();
			for(var i = 0; i < users.length; i++){
			message.reply(`Name: ${users[i][2]}, Score:  ${users[i][3]}/10 \n`);
			}
		return;
		}
		
		
		if(args[1] == "help"){
			var curQuiz = q1.length;
		message.reply("Main command: -q | arguments help, start, n, quit | example usage: -q start, -q help, -q n \n quit is a more special command don't use -q with it when the bot is waiting for your answer for the test just reply quit to quit the test \n to start the quiz do -q start to go to next question use -q n for quiz next");
		return;
		}
		
		if(args[1] == "q"){
			if(myID === null){
			var player = [0, 0, message.author.username, 0, false];
			users.push(player);
			myID = (users.length - 1);
			}
			
			q = users[myID][0];
			q++;
			users[myID][0] = q;
			users[myID][1] = 0;
			randomQuestion = users[myID][1];
		}
		
		q = users[myID][0];
		console.log(q);
		console.log(randomQuestion);
		message.reply(q1[q][randomQuestion][0] + "\n\n" + "0: " + q1[q][randomQuestion][1] + "\n" + "1: " + q1[q][randomQuestion][2] + "\n" + "2: " + q1[q][randomQuestion][3] + "\n" + "3: " + q1[q][randomQuestion][4] + "\n" + q1[q][randomQuestion][5]);

		const answer = message.channel.createMessageCollector({ filter: msg_filter, time: 120000 });//q1[q][randomQuestion][7] });
		answer.on('collect', m => {
		console.log(`Collected ${m.content}`);
		if(m.content === "quit")
		{
			async function wipe() {
        var msg_size = 100;
        while (msg_size == 100) {
            await message.channel.bulkDelete(100)
        .then(messages => msg_size = messages.size)
        .catch(console.error);
        }
    
	}
			message.reply("Quiz over! \n Name: " + users[myID][2] + ", Score: " + users[myID][3] + "/10");
			message.reply(help);

			nomsg = true;
			answer.stop();
			wipe()
			
			return;
		}
		if(m.content === "answer")
		{
			nomsg = true;
			//answer.stop();
			message.reply("The correct answer is: " + q1[q][randomQuestion][5]);
		}
		
		if(parseInt(m.content) === q1[q][randomQuestion][5]){

			message.reply("Correct! " + "\n\n" + q1[q][randomQuestion][6]);
			nomsg = true;
			answer.stop();
			if(users[myID][4] == false){
			users[myID][3]++;
			}
			randomQuestion = users[myID][1];
			randomQuestion++;
			users[myID][1] = randomQuestion;
			q = users[myID][0];
			console.log(users[myID][1]);
			
			
			users[myID][4] = false
			
			if(randomQuestion > 9){
			message.reply("You finished the quiz! \n Name: " + users[myID][2] + ", Score: " + users[myID][3] + "/10");
			wipe();
			return;
			}
			
			next(randomQuestion, q, msg_filter);
			
		}else 
		{	
			users[myID][4] = true;
			if(nomsg == false){
			message.reply("Incorrect!");
			}else{
				nomsg = false;
			}

		}
		});

		answer.on('end', collected => {
		console.log(`Collected ${collected.size} items`);
		if(nomsg == false){		
		message.reply("Time is up!");
		message.reply(help);

		wipe();
		
		}
		nomsg = false;
		});

		console.log(answer);
	}
	
async function wipe() {
			var msg_size = 100;
			while (msg_size == 100) {
            await message.channel.bulkDelete(100)
			.then(messages => msg_size = messages.size)
			.catch(console.error);
			}
			message.reply(help);
}
			
			
			
			
			function next(randomQuestion, q, msg_filter){
		//nomsg = false;
		message.reply(q1[q][randomQuestion][0] + "\n\n" + "0: " + q1[q][randomQuestion][1] + "\n" + "1: " + q1[q][randomQuestion][2] + "\n" + "2: " + q1[q][randomQuestion][3] + "\n" + "3: " + q1[q][randomQuestion][4] + "\n" + q1[q][randomQuestion][5]);

		const answer = message.channel.createMessageCollector({ filter: msg_filter, time: 120000 });
		answer.on('collect', m => {
		console.log(`Collected ${m.content}`);

		if(m.content === "quit")
		{
			message.reply("Quiz over! \n Name: " + users[myID][2] + ", Score: " + users[myID][3] + "/10");
			message.reply(help);
			
			nomsg = true;
			answer.stop();
			wipe();
			
		}
		
		if(m.content === "answer")
		{
			nomsg = true;
			//answer.stop();
			message.reply("The correct answer is: " + q1[q][randomQuestion][5]);
		}
		
		if(parseInt(m.content) === q1[q][randomQuestion][5]){
			message.reply("Correct! " + "\n\n" + q1[q][randomQuestion][6]);
			nomsg = true;
			answer.stop();
			if(users[myID][4] == false){
			users[myID][3]++;
			}
			randomQuestion = users[myID][1];
			randomQuestion++;
			users[myID][1] = randomQuestion;
			q = users[myID][0];
			console.log(users[myID][1]);
			users[myID][4] = false;
			if(randomQuestion > 9){
			message.reply("You finished the quiz! \n Name: " + users[myID][2] + ", Score: " + users[myID][3] + "/10");
			wipe();
			return;
			}
			
			next(randomQuestion, q, msg_filter);
			
		}else 
		{	
			users[myID][4] = true;
			if(nomsg == false){
			message.reply("Incorrect!");
			}else{
				nomsg = false;
			}
		}
		});

		answer.on('end', collected => {
		console.log(`Collected ${collected.size} items`);
		if(nomsg == false){		
		message.reply("Time is up!");

		wipe();
		
		}
		nomsg = false;
		});
			}
});