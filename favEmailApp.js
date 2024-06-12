let favEmailApp = {
    name: 'Gmail',
    mailboxes: [{
        inbox: [], 
        Sent:[], 
        Draft:[], 
        Junk:[], 
        Trash:[]
    }],
    contacts: [
        {
            name: 'Kyle From Web Dev Simplified',
            email: 'kyle@webdevsimplified.com',
            lastMessage: "Are you struggling with laying out elements on your page with CSS?" 
        },
        {
            name: 'Chloe',
            email: 'chloevans22@gmail.com',
            lastMessage: "Binary is a system where numbers and values are expressed as 0 or 1."
        },
        {
            name: 'Chuck',
            email: 'chuckbins@gmail.com',
            lastMessage: "Read: Is it OK to drive in NC with expired car registration tags? Here’s what the law says on SmartNews."
        }
    ],
    emails: [
        {
            sender: 'Kyle From Web Dev Simplified',
            recipient: 'Me',
            subject: 'Class Update',
            body: "I won't be in class today.",
            timestamp: '2024-05-31 14:19:00'
        },
        {
            sender: 'Chloe',
            recipient: 'Me',
            subject: 'Team Meeting',
            body: "Today, we are going to rock it!",
            timestamp: '2024-05-21 16:15:00'
        },
        {
            sender: 'Chuck',
            recipient: 'Me',
            subject: 'Bonus CSS Cheat Sheet!',
            body: 'I cannot wait to share this with you!',
            timestamp: '2024-06-04 08:00:00'
        }
    ],
    folders: {
        work: [
            {
                sender: 'April',
                recipient: 'Me',
                subject: 'Allied Universal Services Offer Information',
                body: "Congratulations!  It is my pleasure, on behalf of Allied Universal Services and APRIL HARVIN, to confirm our offer of employment for the position of Security Officer.",
                timestamp: '2021-02-03 08:59:00'
            },
            {
                sender: 'Chassica',
                recipient: 'Me',
                subject: 'Please complete Onboarding in Paycor',
                body: "Good morning, Please log in to Paycor and complete your onboarding process",
                timestamp: '2024-06-11 09:47:00'
            }
        ],
        personal: [
            {
                sender: 'Shenique',
                recipient: 'Me',
                subject: 'Meeting Reminder',
                body: 'Check Out Tramel J\'s Rockin\' Fun Run Fundraiser Page!',
                timestamp: '2024-06-10 10:00:00'
            }
        ],
        draft: [
            {
                sender: 'Me',
                recipient: 'Chuck',
                subject: 'Thanks for the link',
                body: 'I will read the article as soon as I can.',
                timestamp: '2024-06-04 08:10:00'
            }
        ]
    }
};

// Mail box lists
let mailBoxesLists = favEmailApp.mailboxes;
console.log(mailBoxesLists)

// List of emails
let listOfEmails = favEmailApp.emails;
console.log(listOfEmails)

//get the body of second email
let secondEmailText = favEmailApp.emails[1].body;
console.log(secondEmailText)

//mark an email as sent
favEmailApp.mailboxes[0].Sent.push(favEmailApp.emails[0])
console.log(favEmailApp.mailboxes)

//Add a draft email to the drafts mailbox
favEmailApp.mailboxes[0].Draft.push(favEmailApp.draft[0])
console.log(favEmailApp.mailboxes)