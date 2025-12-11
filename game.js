// ===== 1. CONSTANTS & DATA =====

const TURN_DATA = [
  // ACT 1: CONCEPT & VISION (Turns 1-2)
  {
    turn: 1,
    act: 1,
    actName: "Concept & Vision",
    scene: {
      background: "boardroom",
      title: "The Billion-Dollar Question",
      description: "The CEO leans across the mahogany table. Wall Street expects perfection. Your team expects direction. Choose your North Star.",
      cinematic: true,
      duration: 2500
    },
    decision: {
      prompt: "What will define GTA 6's success?",
      options: [
        {
          id: "revenue",
          label: "Revenue Titan",
          description: "Maximize monetization. Whales over everything. The CFO's dream.",
          icon: "💰",
          effects: {
            metrics: { execPatience: 15, hype: -5, quality: -5 },
            stakeholders: { cfo: 20, creative: -15, cto: -5 },
            northStar: "revenue"
          }
        },
        {
          id: "acclaim",
          label: "Critical Darling",
          description: "Win awards. Make critics weep. Art over commerce.",
          icon: "🏆",
          effects: {
            metrics: { quality: 15, hype: 10, revenue: -5 },
            stakeholders: { creative: 25, cfo: -10, marketing: 5 },
            northStar: "acclaim"
          },
          unlockInsight: "critiqueMatrix"
        },
        {
          id: "liveops",
          label: "Live Ops Empire",
          description: "Build a platform. Updates forever. GaaS the future.",
          icon: "🔄",
          effects: {
            metrics: { retention: 10, techDebt: 10, roadmapProgress: -5 },
            stakeholders: { marketing: 15, cto: -10, cfo: 10 },
            northStar: "liveops"
          }
        },
        {
          id: "playerlove",
          label: "Player Love & Culture Win",
          description: "Build community. Memes > metrics. Legacy over quarterly reports.",
          icon: "❤️",
          effects: {
            metrics: { playerSentiment: 20, teamMorale: 15, execPatience: -10 },
            stakeholders: { creative: 15, cfo: -15, marketing: 10 },
            northStar: "playerlove"
          }
        }
      ]
    },
    randomEvents: [],
    metricVisibility: ["hype", "quality", "teamMorale"]
  },

  {
    turn: 2,
    act: 1,
    actName: "Concept & Vision",
    scene: {
      background: "studio",
      title: "The Vision Pitch",
      description: "Your creative director unveils the vision: \"Vice City. Present day. Three playable protagonists.\" The room holds its breath.",
      cinematic: true,
      duration: 2500
    },
    decision: {
      prompt: "How ambitious should the scope be?",
      options: [
        {
          id: "massive",
          label: "Everything, Everywhere",
          description: "Vice City + Miami Keys + Everglades. The biggest map in franchise history.",
          icon: "🌎",
          effects: {
            metrics: { hype: 25, techDebt: 20, roadmapProgress: -10, quality: -5 },
            stakeholders: { creative: 20, cto: -15, marketing: 15 }
          }
        },
        {
          id: "focused",
          label: "Dense, Not Wide",
          description: "Vice City only. Every building enterable. Quality over quantity.",
          icon: "🎯",
          effects: {
            metrics: { quality: 20, techDebt: -10, hype: -5 },
            stakeholders: { cto: 20, creative: 10, marketing: -10 }
          },
          unlockInsight: "qualityFirst"
        },
        {
          id: "procedural",
          label: "Living World Tech",
          description: "Procedural systems. NPCs with real schedules. AI-driven chaos.",
          icon: "🤖",
          effects: {
            metrics: { techDebt: 30, hype: 15, quality: 10 },
            stakeholders: { cto: -20, creative: 15, marketing: 10 }
          }
        },
        {
          id: "safe",
          label: "Proven Formula",
          description: "GTA V but prettier. Don't fix what isn't broken.",
          icon: "🛡️",
          effects: {
            metrics: { quality: 10, hype: -15, techDebt: -10, playerSentiment: -10 },
            stakeholders: { cto: 15, creative: -20, cfo: 15 }
          }
        }
      ]
    },
    randomEvents: ["scope_creep"],
    metricVisibility: ["hype", "quality", "techDebt", "teamMorale"]
  },

  // ACT 2: DISCOVERY (Turns 3-4)
  {
    turn: 3,
    act: 2,
    actName: "Discovery",
    scene: {
      background: "research",
      title: "Player Research Sprint",
      description: "Your UX team returns with data. 400 player interviews. The insights are... uncomfortable.",
      cinematic: true,
      duration: 2500
    },
    decision: {
      prompt: "Which insight do you prioritize?",
      options: [
        {
          id: "monetization",
          label: "Monetization Tolerance Study",
          description: "Players will pay $20 for cosmetics. But only if it's ironic.",
          icon: "💸",
          effects: {
            metrics: { revenue: 15, playerSentiment: -10 },
            stakeholders: { cfo: 20, creative: -10 }
          },
          unlockInsight: "whaleHunting"
        },
        {
          id: "narrative",
          label: "Narrative Preferences",
          description: "Players want consequences. Choices that actually matter this time.",
          icon: "📖",
          effects: {
            metrics: { quality: 15, roadmapProgress: -5 },
            stakeholders: { creative: 20, cto: -5 }
          },
          unlockInsight: "narrativeDepth"
        },
        {
          id: "multiplayer",
          label: "Social Play Patterns",
          description: "Heists are fun. Griefing is not. Shocking revelations.",
          icon: "👥",
          effects: {
            metrics: { retention: 15, playerSentiment: 10 },
            stakeholders: { marketing: 15, cto: 5 }
          },
          unlockInsight: "socialBalance"
        },
        {
          id: "ignore",
          label: "Trust Your Gut",
          description: "Research is for the weak. Rockstar knows best.",
          icon: "🎲",
          effects: {
            metrics: { teamMorale: -15, playerSentiment: -10, quality: -5 },
            stakeholders: { creative: -10, marketing: -15, cto: -10 }
          }
        }
      ]
    },
    randomEvents: ["leak_concept"],
    metricVisibility: ["hype", "quality", "playerSentiment", "retention"]
  },

  {
    turn: 4,
    act: 2,
    actName: "Discovery",
    scene: {
      background: "prototype",
      title: "The Prototype Reveal",
      description: "Engineering shows a playable slice. It's rough. Very rough. But there's something there.",
      cinematic: true,
      duration: 2500
    },
    decision: {
      prompt: "What's the prototype feedback?",
      options: [
        {
          id: "promise",
          label: "Polish the Promise",
          description: "The core loop is good. Give them 3 more months to make it shine.",
          icon: "✨",
          effects: {
            metrics: { quality: 20, roadmapProgress: -10, teamMorale: 15 },
            stakeholders: { cto: 20, creative: 10, cfo: -15 }
          }
        },
        {
          id: "pivot",
          label: "Hard Pivot Required",
          description: "This isn't working. Change the camera system. Scrap the driving physics.",
          icon: "🔄",
          effects: {
            metrics: { quality: -10, techDebt: 15, roadmapProgress: -15, teamMorale: -20 },
            stakeholders: { cto: -25, creative: -15, cfo: -10 }
          }
        },
        {
          id: "ship_it",
          label: "Good Enough. Move On.",
          description: "It's fine. We'll fix it in production. Ship the prototype as milestone 1.",
          icon: "🚀",
          effects: {
            metrics: { roadmapProgress: 20, quality: -15, techDebt: 20 },
            stakeholders: { cfo: 15, cto: -20, creative: -10 }
          }
        },
        {
          id: "data",
          label: "Playtest with Real Players",
          description: "Get 100 players in. Let data decide, not opinions.",
          icon: "📊",
          effects: {
            metrics: { quality: 10, playerSentiment: 10, roadmapProgress: -5 },
            stakeholders: { cto: 10, marketing: 10 }
          },
          unlockInsight: "dataFirst"
        }
      ]
    },
    randomEvents: ["team_burnout"],
    metricVisibility: ["quality", "techDebt", "teamMorale", "roadmapProgress"]
  },

  // ACT 3: PRODUCTION (Turns 5-8)
  {
    turn: 5,
    act: 3,
    actName: "Production",
    scene: {
      background: "roadmap",
      title: "Roadmap Reckoning",
      description: "Engineering estimates are in. Everything is double the expected cost. Time to make cuts.",
      cinematic: true,
      duration: 2500
    },
    decision: {
      prompt: "Roadmap time. Drag features to Build / Later / Kill.",
      isRoadmapTurn: true,
      options: []
    },
    randomEvents: ["feature_leak"],
    metricVisibility: ["roadmapProgress", "techDebt", "teamMorale", "quality"]
  },

  {
    turn: 6,
    act: 3,
    actName: "Production",
    scene: {
      background: "crunch",
      title: "The Crunch Debate",
      description: "Your lead engineer reports 70-hour weeks. Burnout is visible. Marketing wants a trailer next month.",
      cinematic: true,
      duration: 2500
    },
    decision: {
      prompt: "How do you handle the pressure?",
      options: [
        {
          id: "hire",
          label: "Hire Contractors",
          description: "Throw money at the problem. 50 contractors, 6-month contracts.",
          icon: "💼",
          effects: {
            metrics: { roadmapProgress: 15, quality: -10, teamMorale: -5 },
            stakeholders: { cfo: -15, cto: 5, marketing: 15 }
          }
        },
        {
          id: "delay",
          label: "Delay the Trailer",
          description: "Tell marketing no. The team needs breathing room.",
          icon: "⏸️",
          effects: {
            metrics: { teamMorale: 20, hype: -15, execPatience: -15 },
            stakeholders: { cto: 20, marketing: -25, cfo: -10 }
          },
          unlockInsight: "healthyPace"
        },
        {
          id: "crunch",
          label: "Embrace the Crunch",
          description: "This is game dev. Everyone knew what they signed up for.",
          icon: "🔥",
          effects: {
            metrics: { roadmapProgress: 20, teamMorale: -25, quality: -10, techDebt: 15 },
            stakeholders: { cfo: 10, cto: -25, marketing: 15 }
          }
        },
        {
          id: "scope_cut",
          label: "Cut Scope Aggressively",
          description: "Kill half the feature list. Ship a smaller, polished game.",
          icon: "✂️",
          effects: {
            metrics: { quality: 15, hype: -10, roadmapProgress: -20, techDebt: -15 },
            stakeholders: { cto: 15, creative: -15, marketing: -20 }
          }
        }
      ]
    },
    randomEvents: ["dev_attrition", "positive_press"],
    metricVisibility: ["teamMorale", "roadmapProgress", "quality", "techDebt"]
  },

  {
    turn: 7,
    act: 3,
    actName: "Production",
    scene: {
      background: "milestone",
      title: "Vertical Slice Review",
      description: "Execs play your vertical slice. Silence. Then: \"Is this it?\"",
      cinematic: true,
      duration: 2500
    },
    decision: {
      prompt: "How do you respond?",
      options: [
        {
          id: "defend",
          label: "Defend the Vision",
          description: "This is pre-alpha. Trust the process. We'll blow their minds at launch.",
          icon: "🛡️",
          effects: {
            metrics: { execPatience: -20, teamMorale: 10 },
            stakeholders: { cfo: -15, creative: 15, cto: 10 }
          }
        },
        {
          id: "wow_factor",
          label: "Add Wow Factor",
          description: "Greenlight the ray-tracing rewrite. Make it look next-gen.",
          icon: "🌟",
          effects: {
            metrics: { quality: 20, techDebt: 25, roadmapProgress: -15, hype: 15 },
            stakeholders: { creative: 20, cto: -20, marketing: 15 }
          }
        },
        {
          id: "data_show",
          label: "Show the Data",
          description: "Playtest scores are 8.5/10. Engagement is high. Numbers don't lie.",
          icon: "📈",
          effects: {
            metrics: { execPatience: 10, playerSentiment: 5 },
            stakeholders: { cfo: 15, marketing: 10 }
          }
        },
        {
          id: "panic",
          label: "Panic & Pivot",
          description: "Scrap the current build. Start over with Unreal Engine 5.",
          icon: "😱",
          effects: {
            metrics: { roadmapProgress: -30, techDebt: 40, teamMorale: -30, quality: -20 },
            stakeholders: { cto: -30, creative: -25, cfo: -25, marketing: -20 }
          }
        }
      ]
    },
    randomEvents: ["gameplay_leak", "viral_moment"],
    metricVisibility: ["quality", "hype", "execPatience", "playerSentiment"]
  },

  {
    turn: 8,
    act: 3,
    actName: "Production",
    scene: {
      background: "roadmap",
      title: "Final Feature Lock",
      description: "Last chance to adjust the roadmap before code freeze. Choose carefully.",
      cinematic: true,
      duration: 2500
    },
    decision: {
      prompt: "Final roadmap adjustment. Build / Later / Kill.",
      isRoadmapTurn: true,
      options: []
    },
    randomEvents: ["competitor_announce"],
    metricVisibility: ["roadmapProgress", "techDebt", "quality", "hype"]
  },

  // ACT 4: QA & POLISH (Turns 9-10)
  {
    turn: 9,
    act: 4,
    actName: "QA & Polish",
    scene: {
      background: "bugs",
      title: "The Bug Mountain",
      description: "QA reports 4,237 bugs. 847 are critical. Release is in 4 months.",
      cinematic: true,
      duration: 2500
    },
    decision: {
      prompt: "What's the priority?",
      options: [
        {
          id: "stability",
          label: "Stability First",
          description: "Fix every crash. Ship a stable game, even if it's boring.",
          icon: "🔧",
          effects: {
            metrics: { quality: 25, techDebt: -20, hype: -5, roadmapProgress: -10 },
            stakeholders: { cto: 25, creative: -10 }
          },
          unlockInsight: "rockSolid"
        },
        {
          id: "gameplay",
          label: "Gameplay Polish Only",
          description: "Fix what players will notice. Ignore edge cases and rare bugs.",
          icon: "🎮",
          effects: {
            metrics: { quality: 15, playerSentiment: 10, techDebt: -5 },
            stakeholders: { creative: 15, cto: 5 }
          }
        },
        {
          id: "ship_bugs",
          label: "Day One Patch It",
          description: "Ship with known issues. Fix it live. This is 2025, everyone does it.",
          icon: "📦",
          effects: {
            metrics: { quality: -20, roadmapProgress: 15, playerSentiment: -15, techDebt: 10 },
            stakeholders: { cfo: 10, cto: -25, marketing: 5 }
          }
        },
        {
          id: "delay_launch",
          label: "Delay Launch 3 Months",
          description: "We need more time. Quality over deadlines.",
          icon: "⏳",
          effects: {
            metrics: { quality: 30, hype: -20, execPatience: -25, teamMorale: -10 },
            stakeholders: { cto: 20, cfo: -30, marketing: -25 }
          }
        }
      ]
    },
    randomEvents: ["major_bug_found", "cert_failure"],
    metricVisibility: ["quality", "techDebt", "playerSentiment", "execPatience"]
  },

  {
    turn: 10,
    act: 4,
    actName: "QA & Polish",
    scene: {
      background: "marketing",
      title: "The Marketing Blitz",
      description: "Marketing unveils the campaign: $200M budget. Celebrity endorsements. Super Bowl ad. They want your approval.",
      cinematic: true,
      duration: 2500
    },
    decision: {
      prompt: "How aggressive should marketing be?",
      options: [
        {
          id: "max_hype",
          label: "Maximum Hype Train",
          description: "Overpromise everything. Let the game speak for itself later.",
          icon: "🚂",
          effects: {
            metrics: { hype: 40, playerSentiment: -15, execPatience: 10 },
            stakeholders: { marketing: 25, creative: -15, cfo: -10 }
          }
        },
        {
          id: "honest",
          label: "Honest Marketing",
          description: "Show what the game actually is. Manage expectations.",
          icon: "🤝",
          effects: {
            metrics: { hype: 15, playerSentiment: 20, quality: 5 },
            stakeholders: { creative: 20, marketing: -10, cto: 10 }
          },
          unlockInsight: "trustMarketing"
        },
        {
          id: "mystery",
          label: "Mystery Campaign",
          description: "Show nothing. Tease everything. Let speculation build hype.",
          icon: "🕵️",
          effects: {
            metrics: { hype: 30, playerSentiment: 10, execPatience: -5 },
            stakeholders: { marketing: 20, creative: 10 }
          }
        },
        {
          id: "budget_cut",
          label: "Cut Marketing Budget",
          description: "The game will sell itself. Use $100M, pocket the rest for post-launch.",
          icon: "💰",
          effects: {
            metrics: { hype: -15, retention: 10, revenue: 10 },
            stakeholders: { cfo: 20, marketing: -30 }
          }
        }
      ]
    },
    randomEvents: ["marketing_leak", "influencer_hype"],
    metricVisibility: ["hype", "playerSentiment", "quality", "execPatience"]
  },

  // ACT 5: LAUNCH (Turns 11-12)
  {
    turn: 11,
    act: 5,
    actName: "Launch",
    scene: {
      background: "launch",
      title: "Launch Week: Day One",
      description: "Servers are on fire. Literally. 10 million concurrent players. Reddit is... having opinions.",
      cinematic: true,
      duration: 2500
    },
    decision: {
      prompt: "CRITICAL: Server crisis. What do you do?",
      options: [
        {
          id: "scale_servers",
          label: "Emergency Server Scaling",
          description: "Spin up 10x capacity. $5M in cloud costs. Fix it now.",
          icon: "☁️",
          effects: {
            metrics: { playerSentiment: 15, retention: 10, revenue: -10 },
            stakeholders: { cfo: -20, cto: 15, marketing: 10 }
          }
        },
        {
          id: "queue",
          label: "Implement Queue System",
          description: "Slow and steady. Players will wait. Protect stability.",
          icon: "⏱️",
          effects: {
            metrics: { quality: 10, playerSentiment: -15, retention: -10 },
            stakeholders: { cto: 10, marketing: -15 }
          }
        },
        {
          id: "disable_features",
          label: "Disable Multiplayer",
          description: "Turn off online. Single-player only until we stabilize.",
          icon: "🔌",
          effects: {
            metrics: { quality: 5, playerSentiment: -20, retention: -25, hype: -15 },
            stakeholders: { cto: 5, creative: -10, marketing: -20 }
          }
        },
        {
          id: "rollback",
          label: "Emergency Rollback",
          description: "Revert to the previous build. Start over.",
          icon: "⏮️",
          effects: {
            metrics: { quality: -10, playerSentiment: -30, hype: -20, retention: -20 },
            stakeholders: { cto: -25, marketing: -25, cfo: -15 }
          }
        }
      ]
    },
    randomEvents: ["review_bomb", "viral_success"],
    metricVisibility: ["playerSentiment", "retention", "revenue", "quality"]
  },

  {
    turn: 12,
    act: 5,
    actName: "Launch",
    scene: {
      background: "postlaunch",
      title: "Launch Week: Day Seven",
      description: "Week one sales: 25 million copies. Metacritic: 84. Steam: Mixed reviews. The CFO is smiling. The community is... complicated.",
      cinematic: true,
      duration: 2500
    },
    decision: {
      prompt: "What's the immediate post-launch focus?",
      options: [
        {
          id: "fixes",
          label: "Patch Everything",
          description: "All hands on fixes. No new content until the game is perfect.",
          icon: "🔧",
          effects: {
            metrics: { quality: 25, playerSentiment: 20, retention: 10 },
            stakeholders: { cto: 20, creative: -10, marketing: 10 }
          }
        },
        {
          id: "content",
          label: "Drop New Content",
          description: "Launch DLC roadmap now. Give players something to chase.",
          icon: "🎁",
          effects: {
            metrics: { retention: 25, revenue: 20, quality: -10, playerSentiment: -10 },
            stakeholders: { marketing: 20, cfo: 20, cto: -15 }
          }
        },
        {
          id: "community",
          label: "Community First",
          description: "Listen to feedback. Implement top-requested features.",
          icon: "👥",
          effects: {
            metrics: { playerSentiment: 25, retention: 15, quality: 10 },
            stakeholders: { creative: 15, marketing: 15 }
          },
          unlockInsight: "playerVoice"
        },
        {
          id: "monetize",
          label: "Launch Monetization",
          description: "Cosmetics shop goes live. Milk it while it's hot.",
          icon: "💸",
          effects: {
            metrics: { revenue: 35, playerSentiment: -20, retention: -10 },
            stakeholders: { cfo: 30, creative: -20, marketing: -10 }
          }
        }
      ]
    },
    randomEvents: ["award_nomination", "controversy"],
    metricVisibility: ["playerSentiment", "retention", "revenue", "quality"]
  },

  // ACT 6: LIVE OPS (Turns 13-14)
  {
    turn: 13,
    act: 6,
    actName: "Live Ops",
    scene: {
      background: "liveops",
      title: "Month Three: The Retention Cliff",
      description: "Daily active users are down 60%. Twitch viewership collapsed. Your live ops team needs direction.",
      cinematic: true,
      duration: 2500
    },
    decision: {
      prompt: "How do you save retention?",
      options: [
        {
          id: "events",
          label: "Seasonal Events",
          description: "Weekly challenges. Limited-time rewards. FOMO-driven engagement.",
          icon: "🎪",
          effects: {
            metrics: { retention: 25, revenue: 15, playerSentiment: -5 },
            stakeholders: { marketing: 20, cfo: 15 }
          }
        },
        {
          id: "expansion",
          label: "Major Expansion",
          description: "New map area. 10+ hours of story. Charge $30.",
          icon: "🗺️",
          effects: {
            metrics: { retention: 30, revenue: 25, quality: -10, playerSentiment: 10 },
            stakeholders: { creative: 20, cfo: 25, cto: -15 }
          }
        },
        {
          id: "competitive",
          label: "Competitive Mode",
          description: "Ranked heists. Leaderboards. Esports-ready.",
          icon: "🏅",
          effects: {
            metrics: { retention: 20, playerSentiment: 15, quality: 5 },
            stakeholders: { marketing: 25, creative: 10 }
          }
        },
        {
          id: "accept",
          label: "Accept the Decline",
          description: "All games fade. Shift resources to GTA 7 pre-production.",
          icon: "🌅",
          effects: {
            metrics: { retention: -15, teamMorale: -15, revenue: -10, playerSentiment: -20 },
            stakeholders: { cfo: 10, marketing: -20, creative: -15 }
          }
        }
      ]
    },
    randomEvents: ["competitor_launch", "streamer_revival"],
    metricVisibility: ["retention", "revenue", "playerSentiment", "quality"]
  },

  {
    turn: 14,
    act: 6,
    actName: "Live Ops",
    scene: {
      background: "finale",
      title: "Year One: The Reckoning",
      description: "Board meeting. Revenue: $3.2B. Active users: 8M. Your CEO asks: \"Should we do this again?\"",
      cinematic: true,
      duration: 2500
    },
    decision: {
      prompt: "What's your final move?",
      options: [
        {
          id: "sequel",
          label: "Greenlight the Sequel",
          description: "GTA 7. Same team. Bigger budget. We learned from our mistakes.",
          icon: "🔄",
          effects: {
            metrics: { teamMorale: 20, execPatience: 15, playerSentiment: 10 },
            stakeholders: { creative: 20, cfo: 15, cto: 10 }
          }
        },
        {
          id: "support",
          label: "10-Year Support Plan",
          description: "This is our platform. GTA Online forever.",
          icon: "♾️",
          effects: {
            metrics: { retention: 20, revenue: 25, quality: -10 },
            stakeholders: { cfo: 25, marketing: 20, creative: -15 }
          }
        },
        {
          id: "pivot",
          label: "Pivot to New IP",
          description: "We've milked GTA. Time for something fresh.",
          icon: "🌟",
          effects: {
            metrics: { teamMorale: 15, playerSentiment: -15, execPatience: -10 },
            stakeholders: { creative: 25, cfo: -20, marketing: -10 }
          }
        },
        {
          id: "retire",
          label: "Retire as PM",
          description: "You've earned it. Walk away while you're ahead.",
          icon: "🏖️",
          effects: {
            metrics: { teamMorale: -20, execPatience: -20 },
            stakeholders: { cto: -10, creative: -10, marketing: -10, cfo: -10 }
          }
        }
      ]
    },
    randomEvents: ["legacy_moment"],
    metricVisibility: ["retention", "revenue", "playerSentiment", "teamMorale"]
  },

  // TURN 15: POSTMORTEM
  {
    turn: 15,
    act: 6,
    actName: "Postmortem",
    scene: {
      background: "end",
      title: "Mission Complete",
      description: "The journey ends. Time to face the music.",
      cinematic: true,
      duration: 2000
    },
    decision: {
      prompt: "",
      isPostmortem: true,
      options: []
    },
    randomEvents: [],
    metricVisibility: []
  }
];

const STAKEHOLDER_REACTIONS = {
  cto: {
    personality: "pragmatic-engineer",
    reactions: {
      high: [
        "Finally, someone who gets it.",
        "This is the way.",
        "I'll make it happen.",
        "Solid call. I'm on it."
      ],
      medium: [
        "Alright, but watch the tech debt.",
        "I hope you know what you're doing.",
        "This is... manageable.",
        "Not ideal, but doable."
      ],
      low: [
        "Are you kidding me right now?",
        "I'm updating my LinkedIn.",
        "The servers will literally catch fire.",
        "This is why we can't have nice things."
      ]
    }
  },
  creative: {
    personality: "visionary-artist",
    reactions: {
      high: [
        "This is why I joined this team.",
        "Beautiful. Absolutely beautiful.",
        "Now we're cooking.",
        "I've got chills. Let's do this."
      ],
      medium: [
        "I guess we can make it work.",
        "Not what I'd choose, but okay.",
        "Fine. But don't blame me if it's boring.",
        "Compromises, compromises..."
      ],
      low: [
        "We're making a soulless product.",
        "This is artistic cowardice.",
        "I didn't sign up for this.",
        "My portfolio is crying."
      ]
    }
  },
  marketing: {
    personality: "hype-merchant",
    reactions: {
      high: [
        "This is going to break the internet.",
        "I can sell the HELL out of this.",
        "Twitter won't know what hit them.",
        "Genius. Pure genius."
      ],
      medium: [
        "Okay, I can work with this.",
        "Not flashy, but it'll do.",
        "I'll spin it somehow.",
        "Could be worse."
      ],
      low: [
        "How am I supposed to market this?",
        "This is a PR nightmare waiting to happen.",
        "Marketing forgot what 'deadline' means again.",
        "I'm going to get fired, aren't I?"
      ]
    }
  },
  cfo: {
    personality: "money-counter",
    reactions: {
      high: [
        "The shareholders will love this.",
        "Now we're talking ROI.",
        "Music to my ears.",
        "This is why you're the PM."
      ],
      medium: [
        "The numbers could be better.",
        "I'll allow it. This time.",
        "Not terrible, not great.",
        "Show me the revenue projections."
      ],
      low: [
        "Did you major in burning money?",
        "The board is going to murder us.",
        "I hope your resume is updated.",
        "This quarter is ruined."
      ]
    }
  }
};

const EVENT_POOL = [
  {
    id: "scope_creep",
    name: "Feature Creep Alert",
    description: "Engineering reports scope is growing. What started as \"Vice City\" is now \"Vice City + Space Station.\"",
    conditions: (state) => state.currentTurn >= 2,
    probability: 0.3,
    effects: {
      metrics: { techDebt: 10, roadmapProgress: -5 },
      stakeholders: { cto: -10 }
    }
  },
  {
    id: "leak_concept",
    name: "Reddit Leak",
    description: "Concept art leaked on r/GamingLeaksAndRumours. 47k upvotes. Reactions are... mixed.",
    conditions: (state) => state.currentTurn >= 3 && state.metrics.hype > 50,
    probability: 0.25,
    effects: {
      metrics: { hype: 15, execPatience: -10 },
      stakeholders: { marketing: -15 }
    }
  },
  {
    id: "team_burnout",
    name: "Burnout Warning",
    description: "Your lead designer just worked 14 days straight. HR is concerned.",
    conditions: (state) => state.metrics.teamMorale < 50,
    probability: 0.4,
    effects: {
      metrics: { teamMorale: -15, quality: -5 },
      stakeholders: { cto: -10 }
    }
  },
  {
    id: "feature_leak",
    name: "Feature List Leaked",
    description: "The entire roadmap is on Kotaku. Journalists are calling it \"ambitious\" (translation: impossible).",
    conditions: (state) => state.currentTurn >= 5,
    probability: 0.2,
    effects: {
      metrics: { hype: 20, execPatience: -15 },
      stakeholders: { marketing: -20 }
    }
  },
  {
    id: "dev_attrition",
    name: "Senior Dev Quits",
    description: "Your lead graphics engineer just accepted an offer from Epic Games. They're gone in 2 weeks.",
    conditions: (state) => state.metrics.teamMorale < 40,
    probability: 0.35,
    effects: {
      metrics: { techDebt: 15, roadmapProgress: -10, teamMorale: -10 },
      stakeholders: { cto: -20 }
    }
  },
  {
    id: "positive_press",
    name: "IGN Preview Hits",
    description: "\"The most ambitious GTA yet\" - IGN gives you a glowing preview. Hype is real.",
    conditions: (state) => state.metrics.quality > 60,
    probability: 0.25,
    effects: {
      metrics: { hype: 25, playerSentiment: 15 },
      stakeholders: { marketing: 20 }
    }
  },
  {
    id: "gameplay_leak",
    name: "Alpha Footage Leaked",
    description: "10 minutes of pre-alpha gameplay is on YouTube. Comments are brutal: \"PS3 graphics??\"",
    conditions: (state) => state.currentTurn >= 7 && state.metrics.quality < 60,
    probability: 0.3,
    effects: {
      metrics: { hype: -20, playerSentiment: -15, execPatience: -10 },
      stakeholders: { marketing: -20, creative: -10 }
    }
  },
  {
    id: "viral_moment",
    name: "Viral Meme Moment",
    description: "A bug from your vertical slice becomes a meme. \"NPCs doing backflips\" is trending on Twitter.",
    conditions: (state) => state.currentTurn >= 7,
    probability: 0.2,
    effects: {
      metrics: { hype: 20, playerSentiment: 10 },
      stakeholders: { marketing: 15 }
    }
  },
  {
    id: "competitor_announce",
    name: "Competitor Announcement",
    description: "Ubisoft just announced \"Assassin's Creed: Miami.\" Same setting. Same release window.",
    conditions: (state) => state.currentTurn >= 8,
    probability: 0.15,
    effects: {
      metrics: { hype: -15, execPatience: -10 },
      stakeholders: { marketing: -15, cfo: -10 }
    }
  },
  {
    id: "major_bug_found",
    name: "Critical Bug Discovered",
    description: "QA found a save corruption bug. It affects 30% of playthroughs. This is bad.",
    conditions: (state) => state.currentTurn >= 9 && state.metrics.techDebt > 50,
    probability: 0.4,
    effects: {
      metrics: { quality: -20, techDebt: 10 },
      stakeholders: { cto: -25 }
    }
  },
  {
    id: "cert_failure",
    name: "Certification Failed",
    description: "Sony rejected your build. 23 crash bugs. Resubmit in 2 weeks.",
    conditions: (state) => state.currentTurn >= 9 && state.metrics.quality < 50,
    probability: 0.3,
    effects: {
      metrics: { quality: -15, roadmapProgress: -10, execPatience: -20 },
      stakeholders: { cto: -20, cfo: -15 }
    }
  },
  {
    id: "marketing_leak",
    name: "Marketing Campaign Leaked",
    description: "Your Super Bowl ad leaked 3 weeks early. Marketing is furious.",
    conditions: (state) => state.currentTurn >= 10,
    probability: 0.2,
    effects: {
      metrics: { hype: 10, execPatience: -10 },
      stakeholders: { marketing: -25 }
    }
  },
  {
    id: "influencer_hype",
    name: "Streamer Hype Train",
    description: "Top streamers got early access. XQC just played for 8 hours straight. \"It's actually good?!\"",
    conditions: (state) => state.currentTurn >= 10 && state.metrics.quality > 60,
    probability: 0.25,
    effects: {
      metrics: { hype: 30, playerSentiment: 20 },
      stakeholders: { marketing: 25 }
    }
  },
  {
    id: "review_bomb",
    name: "Review Bombed",
    description: "Steam reviews: Mostly Negative. Reason: \"No FOV slider.\" The internet is ridiculous.",
    conditions: (state) => state.currentTurn >= 11,
    probability: 0.3,
    effects: {
      metrics: { playerSentiment: -25, retention: -15 },
      stakeholders: { marketing: -20, creative: -10 }
    }
  },
  {
    id: "viral_success",
    name: "Viral Success Moment",
    description: "Your launch trailer hit 50M views in 24 hours. #GTA6 is trending worldwide.",
    conditions: (state) => state.currentTurn >= 11 && state.metrics.hype > 70,
    probability: 0.25,
    effects: {
      metrics: { hype: 25, playerSentiment: 20, revenue: 15 },
      stakeholders: { marketing: 30, cfo: 20 }
    }
  },
  {
    id: "award_nomination",
    name: "Award Nomination",
    description: "Nominated for \"Best Game Direction\" at The Game Awards. The creative team is ecstatic.",
    conditions: (state) => state.currentTurn >= 12 && state.metrics.quality > 70,
    probability: 0.3,
    effects: {
      metrics: { playerSentiment: 15, teamMorale: 20 },
      stakeholders: { creative: 25, marketing: 15 }
    }
  },
  {
    id: "controversy",
    name: "Controversy Erupts",
    description: "A mission is causing outrage on Twitter. \"Rockstar has gone too far.\" Same as it ever was.",
    conditions: (state) => state.currentTurn >= 12,
    probability: 0.25,
    effects: {
      metrics: { playerSentiment: -15, hype: 10, revenue: 5 },
      stakeholders: { creative: -15, marketing: 10 }
    }
  },
  {
    id: "competitor_launch",
    name: "Competitor Launches",
    description: "\"Cyberpunk 2088\" just dropped. It's... actually good. Your players are distracted.",
    conditions: (state) => state.currentTurn >= 13,
    probability: 0.2,
    effects: {
      metrics: { retention: -20, playerSentiment: -10 },
      stakeholders: { marketing: -20 }
    }
  },
  {
    id: "streamer_revival",
    name: "Streamer Revival",
    description: "A popular streamer started a role-play server. Viewership is back. Retention spiked 40%.",
    conditions: (state) => state.currentTurn >= 13,
    probability: 0.2,
    effects: {
      metrics: { retention: 30, playerSentiment: 20 },
      stakeholders: { marketing: 20 }
    }
  },
  {
    id: "legacy_moment",
    name: "Legacy Moment",
    description: "Industry analysts call GTA 6 \"the defining game of the generation.\" You made history.",
    conditions: (state) => state.currentTurn >= 14 && state.metrics.quality > 75 && state.metrics.playerSentiment > 70,
    probability: 0.3,
    effects: {
      metrics: { playerSentiment: 25, teamMorale: 30 },
      stakeholders: { creative: 30, marketing: 25, cfo: 20, cto: 25 }
    }
  }
];

const INSIGHT_CARD_POOL = [
  { id: "critiqueMatrix", title: "Critique Matrix", description: "Reviews boost quality perception +20%", effectType: "metric_boost", metric: "quality" },
  { id: "qualityFirst", title: "Quality First", description: "Tech debt increases 30% slower", effectType: "risk_reduction", metric: "techDebt" },
  { id: "whaleHunting", title: "Whale Psychology", description: "Revenue decisions +30% effective", effectType: "metric_boost", metric: "revenue" },
  { id: "narrativeDepth", title: "Narrative Depth", description: "Story decisions boost sentiment +15%", effectType: "metric_boost", metric: "playerSentiment" },
  { id: "socialBalance", title: "Social Balance", description: "Multiplayer features boost retention +20%", effectType: "metric_boost", metric: "retention" },
  { id: "dataFirst", title: "Data-Driven", description: "Reduce risk of negative events by 40%", effectType: "risk_reduction", metric: "all" },
  { id: "healthyPace", title: "Healthy Pace", description: "Team morale degrades 50% slower", effectType: "risk_reduction", metric: "teamMorale" },
  { id: "rockSolid", title: "Rock Solid", description: "Quality decisions +25% more effective", effectType: "metric_boost", metric: "quality" },
  { id: "trustMarketing", title: "Trust Marketing", description: "Hype decisions also boost sentiment +10", effectType: "metric_boost", metric: "playerSentiment" },
  { id: "playerVoice", title: "Player Voice", description: "Community decisions +40% more effective", effectType: "metric_boost", metric: "playerSentiment" }
];

const ARCHETYPE_DESCRIPTIONS = {
  "Visionary Firestarter": "You took risks, pushed boundaries, and somehow pulled it off. Your team either loves you or fears you. Probably both.",
  "Political Operator": "You kept everyone happy, balanced every interest, and shipped a product. Boring? Maybe. Effective? Absolutely.",
  "Pragmatic Executioner": "You shipped on time, under budget, with quality intact. No drama. No chaos. Just results. Are you even human?",
  "Firefighter": "Chaos followed you everywhere. You spent more time fixing disasters than preventing them. But hey, you survived."
};

const ROADMAP_FEATURES = [
  { id: "mp_heists", name: "Multiplayer Heists", cost: 30, value: 40, description: "Co-op missions with complex setups" },
  { id: "ray_tracing", name: "Full Ray Tracing", cost: 35, value: 20, description: "Next-gen visuals, performance nightmare" },
  { id: "destructible", name: "Destructible Environments", cost: 40, value: 35, description: "Every building can be damaged" },
  { id: "npc_ai", name: "Advanced NPC AI", cost: 25, value: 30, description: "NPCs with daily routines and memory" },
  { id: "vehicle_custom", name: "Deep Vehicle Customization", cost: 20, value: 25, description: "Pimp My Ride 2.0" },
  { id: "stock_market", name: "Dynamic Stock Market", cost: 15, value: 20, description: "In-game economy simulation" },
  { id: "property", name: "Property Empire", cost: 25, value: 30, description: "Buy and manage businesses" },
  { id: "mod_support", name: "Official Mod Support", cost: 30, value: 40, description: "Steam Workshop integration" },
  { id: "battle_royale", name: "Battle Royale Mode", cost: 35, value: 25, description: "Because it's 2025 and why not" },
  { id: "vr_support", name: "VR Support", cost: 45, value: 15, description: "First-person VR mode" },
  { id: "procedural_missions", name: "Procedural Missions", cost: 30, value: 35, description: "Infinite replayability" },
  { id: "companion_app", name: "Companion Mobile App", cost: 15, value: 15, description: "Manage empire from phone" }
];

// ===== 2. STATE MANAGEMENT =====

let state = {
  currentTurn: 1,
  currentAct: 1,
  northStarGoal: null,

  metrics: {
    hype: 50,
    playerSentiment: 50,
    quality: 50,
    techDebt: 20,
    roadmapProgress: 0,
    teamMorale: 70,
    execPatience: 80,
    revenue: 0,
    retention: 0
  },

  stakeholders: {
    cto: { trust: 70, name: "CTO" },
    creative: { trust: 70, name: "Creative Director" },
    marketing: { trust: 70, name: "Marketing Lead" },
    cfo: { trust: 70, name: "CFO" }
  },

  insightCards: [],
  decisionHistory: [],
  eventHistory: [],

  roadmapFeatures: [],
  roadmapDecisions: { build: [], later: [], kill: [] },

  gameOver: false,
  finalScore: null,
  archetype: null
};

function updateState(updates) {
  state = { ...state, ...updates };

  // Clamp metrics
  Object.keys(state.metrics).forEach(key => {
    state.metrics[key] = clamp(state.metrics[key], 0, 100);
  });

  // Clamp stakeholder trust
  Object.keys(state.stakeholders).forEach(key => {
    state.stakeholders[key].trust = clamp(state.stakeholders[key].trust, 0, 100);
  });

  saveGame();
}

// ===== 3. CORE GAME ENGINE =====

class GameEngine {
  constructor() {
    this.turnManager = new TurnManager();
    this.metricCalculator = new MetricCalculator();
    this.stakeholderManager = new StakeholderManager();
    this.eventSystem = new EventSystem();
    this.insightManager = new InsightManager();
    this.roadmapBoard = null;
    this.scoringEngine = new ScoringEngine();
    this.renderer = new Renderer();
    this.animationController = new AnimationController();
  }

  init() {
    console.log("🎮 GTA 6 PM Tycoon - Initializing...");

    // Wait for loading screen to be hidden, then show intro
    setTimeout(() => {
      try {
        // Try to load saved game
        if (loadGame()) {
          console.log("💾 Loaded saved game");
          this.renderer.renderHUD();
          this.turnManager.playTurn(state.currentTurn);
        } else {
          // Show intro
          console.log("📺 Showing intro screen...");
          this.showIntro();
        }
      } catch (error) {
        console.error("❌ Error in init:", error);
        alert("Initialization error: " + error.message);
      }
    }, 1600); // Wait for loading screen to hide
  }

  showIntro() {
    const startBtn = document.getElementById('start-game-btn');
    if (!startBtn) {
      console.error("❌ Start button not found!");
      alert("Error: Could not find start button. Please refresh the page.");
      return;
    }

    console.log("✅ Start button found, adding click listener");
    startBtn.addEventListener('click', () => {
      console.log("🎮 Start button clicked!");
      this.startGame();
    });
  }

  async startGame() {
    console.log("🚀 Starting game...");

    // Hide loading screen
    document.getElementById('loading-screen').classList.add('hidden');
    document.getElementById('game-root').classList.remove('hidden');

    // Initialize HUD
    this.renderer.renderHUD();

    // Start turn 1
    await this.animationController.wait(500);
    this.turnManager.playTurn(1);
  }
}

class TurnManager {
  async playTurn(turnNumber) {
    console.log(`📍 Turn ${turnNumber} starting...`);

    const turnData = TURN_DATA[turnNumber - 1];
    updateState({
      currentTurn: turnNumber,
      currentAct: turnData.act
    });

    // Update HUD
    game.renderer.renderHUD();

    // Special handling for postmortem
    if (turnData.decision.isPostmortem) {
      await game.animationController.wait(1000);
      game.scoringEngine.showPostmortem();
      return;
    }

    // Special handling for roadmap turns
    if (turnData.decision.isRoadmapTurn) {
      await this.playRoadmapTurn(turnData);
      return;
    }

    // Phase 1: Show cinematic scene
    if (turnData.scene.cinematic) {
      await game.animationController.showCinematic(turnData.scene);
    }

    // Phase 2: Present decision (wait for user)
    await this.presentDecision(turnData);
  }

  async presentDecision(turnData) {
    // Filter options based on conditions
    const filteredTurnData = this.applyDynamicOptions(turnData);
    game.renderer.renderScene(filteredTurnData);
  }

  applyDynamicOptions(turnData) {
    const filtered = { ...turnData };

    // Add dynamic context to descriptions based on game state
    filtered.scene = { ...turnData.scene };

    // Reference previous decisions in dialogue
    if (state.currentTurn > 1 && state.decisionHistory.length > 0) {
      const lastDecision = state.decisionHistory[state.decisionHistory.length - 1];

      // Add contextual flavor based on metrics
      if (state.metrics.techDebt > 70 && state.currentTurn > 5) {
        filtered.scene.description += " (Your dev team looks exhausted from the technical debt.)";
      }
      if (state.metrics.hype > 80) {
        filtered.scene.description += " (The internet won't stop talking about GTA 6.)";
      }
      if (state.metrics.execPatience < 30) {
        filtered.scene.description += " (The executive team is getting impatient.)";
      }
    }

    // Filter options based on conditions
    filtered.decision = { ...turnData.decision };
    filtered.decision.options = turnData.decision.options.filter(option => {
      // Check if option has a condition
      if (!option.condition) return true;

      return this.evaluateCondition(option.condition);
    });

    // Add bonus options based on state
    const bonusOptions = this.getBonusOptions(turnData.turn);
    if (bonusOptions.length > 0) {
      filtered.decision.options = [...filtered.decision.options, ...bonusOptions];
    }

    return filtered;
  }

  evaluateCondition(condition) {
    // Evaluate metric thresholds
    if (condition.metric) {
      const value = state.metrics[condition.metric];
      if (condition.min !== undefined && value < condition.min) return false;
      if (condition.max !== undefined && value > condition.max) return false;
      if (condition.above !== undefined && value <= condition.above) return false;
      if (condition.below !== undefined && value >= condition.below) return false;
    }

    // Evaluate stakeholder trust
    if (condition.stakeholder) {
      const trust = state.stakeholders[condition.stakeholder].trust;
      if (condition.trustMin !== undefined && trust < condition.trustMin) return false;
      if (condition.trustMax !== undefined && trust > condition.trustMax) return false;
    }

    // Evaluate North Star
    if (condition.northStar && state.northStarGoal !== condition.northStar) return false;

    // Evaluate insight cards
    if (condition.requiresInsight) {
      const hasInsight = state.insightCards.some(c => c.id === condition.requiresInsight);
      if (!hasInsight) return false;
    }

    // Evaluate turn requirements
    if (condition.minTurn && state.currentTurn < condition.minTurn) return false;

    return true;
  }

  getBonusOptions(turn) {
    const bonus = [];

    // Turn 3: If tech debt is high, offer refactoring option
    if (turn === 3 && state.metrics.techDebt > 50) {
      bonus.push({
        id: "refactor_debt",
        label: "Technical Intervention",
        description: "Pause features to refactor code. Your tech debt is becoming dangerous.",
        icon: "🔧",
        effects: {
          metrics: { techDebt: -30, roadmapProgress: -15, quality: 20 },
          stakeholders: { cto: 25, cfo: -10 }
        }
      });
    }

    // Turn 6: If hype is low, offer viral marketing stunt
    if (turn === 6 && state.metrics.hype < 40) {
      bonus.push({
        id: "viral_stunt",
        label: "Viral Marketing Stunt",
        description: "Leak a 'behind-the-scenes' video. Risky but could revive hype.",
        icon: "📹",
        effects: {
          metrics: { hype: 35, playerSentiment: 15 },
          stakeholders: { marketing: 20, creative: -10 }
        }
      });
    }

    // Turn 9: If team morale is low, offer team building
    if (turn === 9 && state.metrics.teamMorale < 50) {
      bonus.push({
        id: "team_retreat",
        label: "Emergency Team Retreat",
        description: "Take the team off-site for a week. Morale is in the tank.",
        icon: "🏖️",
        effects: {
          metrics: { teamMorale: 30, roadmapProgress: -10 },
          stakeholders: { cto: 15, cfo: -15 }
        }
      });
    }

    // Turn 10: If quality is high, offer early access
    if (turn === 10 && state.metrics.quality > 75) {
      bonus.push({
        id: "early_access",
        label: "Premium Early Access",
        description: "Quality is solid. Offer early access to superfans for testing.",
        icon: "🎮",
        effects: {
          metrics: { hype: 25, playerSentiment: 20, revenue: 15 },
          stakeholders: { marketing: 20, cfo: 15 }
        }
      });
    }

    // Turn 11: If exec patience is critical, offer scope cut
    if (turn === 11 && state.metrics.execPatience < 25) {
      bonus.push({
        id: "scope_cut",
        label: "Emergency Scope Cut",
        description: "Cut 30% of features to hit the deadline. Execs are about to fire you.",
        icon: "✂️",
        effects: {
          metrics: { roadmapProgress: 25, quality: -20, execPatience: 30 },
          stakeholders: { cfo: 25, creative: -30 }
        }
      });
    }

    return bonus;
  }

  async processDecision(option, turnData) {
    console.log(`✅ Decision made: ${option.id}`);

    // Add to history
    state.decisionHistory.push({
      turn: state.currentTurn,
      decision: option.label,
      option: option.id
    });

    // Set North Star if turn 1
    if (option.effects.northStar) {
      updateState({ northStarGoal: option.effects.northStar });
    }

    // Calculate metric changes
    const metricChanges = game.metricCalculator.calculateEffects(option.effects, state);

    // Apply metric changes
    const newMetrics = { ...state.metrics };
    Object.keys(metricChanges.metrics).forEach(metric => {
      newMetrics[metric] += metricChanges.metrics[metric];
    });
    updateState({ metrics: newMetrics });

    // Apply stakeholder changes
    const newStakeholders = { ...state.stakeholders };
    Object.keys(metricChanges.stakeholders).forEach(stakeholder => {
      newStakeholders[stakeholder].trust += metricChanges.stakeholders[stakeholder];
    });
    updateState({ stakeholders: newStakeholders });

    // Unlock insight if specified
    if (option.unlockInsight) {
      game.insightManager.unlockCard(option.unlockInsight);
    }

    // Phase 3: Show stakeholder reactions
    await game.stakeholderManager.showReactions(metricChanges.stakeholders);

    // Phase 4: Animate metric changes
    await game.renderer.animateMetricChanges(metricChanges.metrics);

    // Phase 5: Roll for random events
    await game.eventSystem.rollForEvents(turnData);

    // Phase 6: Check game over
    if (this.checkGameOver()) {
      return;
    }

    // Phase 7: Transition to next turn
    await game.animationController.wait(800);
    this.playTurn(state.currentTurn + 1);
  }

  async playRoadmapTurn(turnData) {
    await game.animationController.showCinematic(turnData.scene);

    game.roadmapBoard = new RoadmapBoard();
    game.roadmapBoard.show();
  }

  checkGameOver() {
    // Game over if exec patience hits 0
    if (state.metrics.execPatience <= 0) {
      game.scoringEngine.showGameOver("You were fired. Exec patience hit zero. Try being less chaotic.");
      return true;
    }

    // Game over if team morale hits 0
    if (state.metrics.teamMorale <= 0) {
      game.scoringEngine.showGameOver("Your entire team quit. Team morale collapsed. Maybe try being less of a monster.");
      return true;
    }

    return false;
  }
}

class MetricCalculator {
  calculateEffects(effects, currentState) {
    const result = {
      metrics: { ...effects.metrics } || {},
      stakeholders: { ...effects.stakeholders } || {}
    };

    // Apply North Star modifiers
    if (currentState.northStarGoal) {
      result.metrics = this.applyNorthStarModifiers(result.metrics, currentState);
    }

    // Apply insight card modifiers
    result.metrics = game.insightManager.applyCardEffects(result.metrics, currentState);

    // Apply stakeholder trust modifiers
    result.metrics = this.applyStakeholderModifiers(result.metrics, currentState);

    // Apply tech debt penalties
    if (currentState.metrics.techDebt > 70 && result.metrics.quality) {
      result.metrics.quality -= 10;
    }

    return result;
  }

  applyNorthStarModifiers(metrics, state) {
    const modified = { ...metrics };

    switch(state.northStarGoal) {
      case "revenue":
        if (modified.revenue) modified.revenue = Math.round(modified.revenue * 1.3);
        break;
      case "acclaim":
        if (modified.quality) modified.quality = Math.round(modified.quality * 1.3);
        if (modified.playerSentiment) modified.playerSentiment = Math.round(modified.playerSentiment * 1.2);
        break;
      case "liveops":
        if (modified.retention) modified.retention = Math.round(modified.retention * 1.3);
        if (modified.revenue) modified.revenue = Math.round(modified.revenue * 1.15);
        break;
      case "playerlove":
        if (modified.playerSentiment) modified.playerSentiment = Math.round(modified.playerSentiment * 1.3);
        if (modified.retention) modified.retention = Math.round(modified.retention * 1.2);
        break;
    }

    return modified;
  }

  applyStakeholderModifiers(metrics, state) {
    const modified = { ...metrics };

    // Low CTO trust dampens quality gains
    if (state.stakeholders.cto.trust < 40 && modified.quality > 0) {
      modified.quality = Math.round(modified.quality * 0.7);
    }

    // Low team morale dampens all gains
    if (state.metrics.teamMorale < 40) {
      Object.keys(modified).forEach(key => {
        if (modified[key] > 0) {
          modified[key] = Math.round(modified[key] * 0.8);
        }
      });
    }

    return modified;
  }
}

class StakeholderManager {
  async showReactions(stakeholderChanges) {
    const reactionsToShow = [];

    Object.keys(stakeholderChanges).forEach(key => {
      const change = stakeholderChanges[key];
      if (Math.abs(change) >= 10) { // Only show significant changes
        const trust = state.stakeholders[key].trust;
        const reaction = this.getReaction(key, trust, change);
        reactionsToShow.push({ stakeholder: key, message: reaction });
      }
    });

    // Show reactions sequentially
    for (const reaction of reactionsToShow) {
      game.renderer.showReactionBubble(reaction.stakeholder, reaction.message);
      await game.animationController.wait(1500);
    }
  }

  getReaction(stakeholderKey, trust, change) {
    const reactions = STAKEHOLDER_REACTIONS[stakeholderKey].reactions;

    let level;
    if (trust >= 70) level = "high";
    else if (trust >= 40) level = "medium";
    else level = "low";

    const options = reactions[level];
    return randomChoice(options);
  }
}

class EventSystem {
  async rollForEvents(turnData) {
    const possibleEvents = turnData.randomEvents.map(eventId =>
      EVENT_POOL.find(e => e.id === eventId)
    ).filter(e => e !== undefined);

    for (const event of possibleEvents) {
      if (event.conditions(state) && Math.random() < event.probability) {
        await this.triggerEvent(event);
        break; // Only one event per turn
      }
    }
  }

  async triggerEvent(event) {
    console.log(`🎲 Event triggered: ${event.name}`);

    // Apply effects
    const newMetrics = { ...state.metrics };
    Object.keys(event.effects.metrics || {}).forEach(metric => {
      newMetrics[metric] += event.effects.metrics[metric];
    });

    const newStakeholders = { ...state.stakeholders };
    Object.keys(event.effects.stakeholders || {}).forEach(stakeholder => {
      newStakeholders[stakeholder].trust += event.effects.stakeholders[stakeholder];
    });

    updateState({
      metrics: newMetrics,
      stakeholders: newStakeholders,
      eventHistory: [...state.eventHistory, { turn: state.currentTurn, event: event.name }]
    });

    // Show event notification
    await game.renderer.showEventNotification(event);

    // Unlock insight if specified
    if (event.effects.unlockInsight) {
      game.insightManager.unlockCard(event.effects.unlockInsight.id);
    }

    await game.animationController.wait(3000);
  }
}

class InsightManager {
  unlockCard(cardId) {
    const card = INSIGHT_CARD_POOL.find(c => c.id === cardId);
    if (!card || state.insightCards.find(c => c.id === cardId)) return;

    console.log(`💡 Insight unlocked: ${card.title}`);

    state.insightCards.push(card);
    updateState({ insightCards: state.insightCards });

    game.renderer.showInsightUnlock(card);
  }

  applyCardEffects(metrics, state) {
    const modified = { ...metrics };

    state.insightCards.forEach(card => {
      if (card.effectType === "metric_boost" && modified[card.metric]) {
        modified[card.metric] = Math.round(modified[card.metric] * 1.3);
      }
    });

    return modified;
  }
}

class RoadmapBoard {
  constructor() {
    this.features = [...ROADMAP_FEATURES];
    this.zones = { build: [], later: [], kill: [] };
  }

  show() {
    console.log('🗂️ Showing roadmap board for turn', state.currentTurn);
    const board = document.getElementById('roadmap-board');
    board.classList.remove('hidden');

    // Render fresh features and clear zones
    this.render();
    this.setupDragAndDrop();

    // Reset submit button
    const submitBtn = document.getElementById('roadmap-submit');
    // Remove old listeners and add new one
    const newSubmitBtn = submitBtn.cloneNode(true);
    submitBtn.parentNode.replaceChild(newSubmitBtn, submitBtn);

    // Re-enable and reset button text
    const resetBtn = document.getElementById('roadmap-submit');
    resetBtn.disabled = false;
    resetBtn.textContent = 'Lock It In';

    resetBtn.addEventListener('click', () => {
      console.log('🖱️ Lock It In button clicked!');
      this.submit();
    });
    console.log('✅ Roadmap board ready for turn', state.currentTurn);
  }

  render() {
    console.log('🗂️ Rendering roadmap board...');

    // Clear features list
    const featuresList = document.getElementById('features-list');
    featuresList.innerHTML = '';

    // Clear all drop zones (important for Turn 8!)
    const dropZones = document.querySelectorAll('.zone-content');
    dropZones.forEach(zone => {
      // Keep the hint text, remove feature cards
      const hint = zone.querySelector('.zone-hint');
      zone.innerHTML = '';
      if (hint) {
        zone.appendChild(hint);
      } else {
        // Re-add hint if it doesn't exist
        const hintEl = document.createElement('p');
        hintEl.className = 'zone-hint';
        hintEl.textContent = 'Drop here';
        zone.appendChild(hintEl);
      }
    });

    // Reset zone stats
    document.getElementById('build-cost').textContent = '0';
    document.getElementById('build-value').textContent = '0';

    // Render fresh features
    this.features.forEach(feature => {
      const el = document.createElement('div');
      el.className = 'feature-card';
      el.draggable = true;
      el.dataset.featureId = feature.id;
      el.innerHTML = `
        <div class="feature-name">${feature.name}</div>
        <div class="feature-stats">
          <span>Cost: ${feature.cost}</span>
          <span>Value: ${feature.value}</span>
        </div>
      `;
      featuresList.appendChild(el);
    });

    console.log('✅ Roadmap board rendered with', this.features.length, 'features');
  }

  setupDragAndDrop() {
    const featureCards = document.querySelectorAll('.feature-card');

    featureCards.forEach(card => {
      card.addEventListener('dragstart', (e) => {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', card.dataset.featureId);
        card.classList.add('dragging');
      });

      card.addEventListener('dragend', () => {
        card.classList.remove('dragging');
      });
    });

    const dropZones = document.querySelectorAll('.drop-zone');

    dropZones.forEach(zone => {
      zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        zone.classList.add('drag-over');
      });

      zone.addEventListener('dragleave', () => {
        zone.classList.remove('drag-over');
      });

      zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('drag-over');

        const featureId = e.dataTransfer.getData('text/plain');
        const feature = this.features.find(f => f.id === featureId);
        const zoneName = zone.dataset.zone;

        // Remove from other zones
        Object.keys(this.zones).forEach(z => {
          this.zones[z] = this.zones[z].filter(f => f.id !== featureId);
        });

        // Add to this zone
        this.zones[zoneName].push(feature);

        // Move card visually
        const card = document.querySelector(`[data-feature-id="${featureId}"]`);
        zone.querySelector('.zone-content').appendChild(card);

        // Update stats
        this.updateZoneStats();
      });
    });
  }

  updateZoneStats() {
    const buildCost = this.zones.build.reduce((sum, f) => sum + f.cost, 0);
    const buildValue = this.zones.build.reduce((sum, f) => sum + f.value, 0);

    document.getElementById('build-cost').textContent = buildCost;
    document.getElementById('build-value').textContent = buildValue;
  }

  async submit() {
    console.log('🗂️ Roadmap submitted!', this.zones);

    try {
      // Disable button to prevent double-clicks
      const submitBtn = document.getElementById('roadmap-submit');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Processing...';

      const buildCost = this.zones.build.reduce((sum, f) => sum + f.cost, 0);
      const buildValue = this.zones.build.reduce((sum, f) => sum + f.value, 0);

      console.log(`📊 Build Cost: ${buildCost}, Build Value: ${buildValue}`);

      // Calculate effects
      const effects = {
        metrics: {},
        stakeholders: {}
      };

      // Overloaded?
      if (buildCost > 100) {
        effects.metrics.techDebt = 30;
        effects.metrics.roadmapProgress = -10;
        effects.stakeholders.cto = -20;
      }

      // Underdelivered?
      if (buildValue < 80) {
        effects.metrics.execPatience = -20;
        effects.stakeholders.cfo = -15;
      } else {
        effects.metrics.roadmapProgress = 25;
        effects.stakeholders.cfo = 15;
      }

      // Killed too many?
      if (this.zones.kill.length > 5) {
        effects.stakeholders.creative = -25;
        effects.stakeholders.marketing = -20;
        effects.metrics.hype = -15;
      }

      console.log('📊 Effects calculated:', effects);

      // Apply effects
      const newMetrics = { ...state.metrics };
      Object.keys(effects.metrics).forEach(metric => {
        newMetrics[metric] += effects.metrics[metric];
      });

      const newStakeholders = { ...state.stakeholders };
      Object.keys(effects.stakeholders).forEach(stakeholder => {
        newStakeholders[stakeholder].trust += effects.stakeholders[stakeholder];
      });

      console.log('📊 Updating state...');
      updateState({
        metrics: newMetrics,
        stakeholders: newStakeholders,
        roadmapDecisions: this.zones
      });

      // Hide roadmap board
      console.log('📊 Hiding roadmap board...');
      document.getElementById('roadmap-board').classList.add('hidden');

      // Show effects and continue
      console.log('📊 Showing results...');
      await this.showRoadmapResults(buildCost, buildValue);
      console.log('📊 Roadmap processing complete!');

    } catch (error) {
      console.error('❌ Error in roadmap submit:', error);
      alert('Error processing roadmap: ' + error.message);

      // Re-enable button
      const submitBtn = document.getElementById('roadmap-submit');
      submitBtn.disabled = false;
      submitBtn.textContent = 'Lock It In';
    }
  }

  async showRoadmapResults(cost, value) {
    console.log('📊 showRoadmapResults called with cost:', cost, 'value:', value);

    try {
      // Show stakeholder reactions
      console.log('📊 Showing stakeholder reactions...');
      await game.stakeholderManager.showReactions({
        cto: cost > 100 ? -20 : 10,
        cfo: value < 80 ? -15 : 15,
        creative: this.zones.kill.length > 5 ? -25 : 0
      });

      // Update HUD
      console.log('📊 Updating HUD...');
      game.renderer.renderHUD();

      // Continue to next turn
      console.log('📊 Waiting before next turn...');
      await game.animationController.wait(2000);

      console.log('📊 Moving to next turn:', state.currentTurn + 1);
      game.turnManager.playTurn(state.currentTurn + 1);

    } catch (error) {
      console.error('❌ Error in showRoadmapResults:', error);
      throw error;
    }
  }
}

class ScoringEngine {
  calculateFinalScore() {
    // North Star achievement (40%)
    const northStarScore = this.calculateNorthStarScore();

    // Stakeholder management (25%)
    const stakeholderScore = this.calculateStakeholderScore();

    // Quality metrics (20%)
    const qualityScore = this.calculateQualityScore();

    // Roadmap execution (15%)
    const executionScore = this.calculateExecutionScore();

    const totalScore = Math.round(
      northStarScore * 0.4 +
      stakeholderScore * 0.25 +
      qualityScore * 0.2 +
      executionScore * 0.15
    );

    return {
      total: totalScore,
      breakdown: { northStarScore, stakeholderScore, qualityScore, executionScore },
      archetype: this.determineArchetype(),
      turningPoints: this.identifyTurningPoints(),
      epilogue: this.generateEpilogue(totalScore)
    };
  }

  calculateNorthStarScore() {
    switch(state.northStarGoal) {
      case "revenue":
        return state.metrics.revenue;
      case "acclaim":
        return (state.metrics.quality + state.metrics.playerSentiment) / 2;
      case "liveops":
        return (state.metrics.retention + state.metrics.revenue * 0.6) / 1.6;
      case "playerlove":
        return (state.metrics.playerSentiment + state.metrics.retention * 0.6) / 1.6;
      default:
        return 50;
    }
  }

  calculateStakeholderScore() {
    const avg = (
      state.stakeholders.cto.trust +
      state.stakeholders.creative.trust +
      state.stakeholders.marketing.trust +
      state.stakeholders.cfo.trust
    ) / 4;
    return avg;
  }

  calculateQualityScore() {
    return (
      state.metrics.quality * 0.5 +
      state.metrics.playerSentiment * 0.3 +
      (100 - state.metrics.techDebt) * 0.2
    );
  }

  calculateExecutionScore() {
    return (
      state.metrics.roadmapProgress * 0.6 +
      state.metrics.teamMorale * 0.4
    );
  }

  determineArchetype() {
    const avgTrust = this.calculateStakeholderScore();
    const qualityVsSpeed = state.metrics.quality / Math.max(1, state.metrics.techDebt);

    if (state.metrics.quality > 70 && state.decisionHistory.length > 10) {
      return "Visionary Firestarter";
    }
    if (avgTrust > 75 && qualityVsSpeed > 1) {
      return "Political Operator";
    }
    if (state.metrics.roadmapProgress > 70 && state.metrics.techDebt < 40) {
      return "Pragmatic Executioner";
    }
    return "Firefighter";
  }

  identifyTurningPoints() {
    // Find the most impactful decisions
    return state.decisionHistory
      .slice(-3)
      .map((d, i) => ({
        turn: d.turn,
        decision: d.decision,
        impact: "Significantly shaped the outcome"
      }));
  }

  generateEpilogue(score) {
    if (score >= 85) {
      return "Six months later, GTA 6 is called the game of the decade. You're promoted to SVP. The CTO still doesn't return your calls.";
    } else if (score >= 70) {
      return "Six months later, GTA 6 is a commercial success. Critics call it 'solid.' Your mom is proud. The internet has moved on.";
    } else if (score >= 50) {
      return "Six months later, GTA 6 is profitable but forgettable. The CFO calls it 'acceptable.' Your LinkedIn is getting interesting offers.";
    } else {
      return "Six months later, GTA 6 is a cautionary tale. Forbes writes a case study. You start a podcast about product management fails.";
    }
  }

  showPostmortem() {
    const scoreData = this.calculateFinalScore();
    updateState({ finalScore: scoreData.total, archetype: scoreData.archetype });

    game.renderer.renderPostmortem(scoreData);
    document.getElementById('postmortem').classList.remove('hidden');
  }

  showGameOver(reason) {
    const postmortem = document.getElementById('postmortem');
    const content = postmortem.querySelector('.postmortem-content');

    content.innerHTML = `
      <div class="postmortem-header">
        <h1>Game Over</h1>
      </div>
      <div class="epilogue">
        <p class="satirical-text">${reason}</p>
      </div>
      <button class="play-again-btn" onclick="location.reload()">Try Again</button>
    `;

    postmortem.classList.remove('hidden');
  }
}

class Renderer {
  renderHUD() {
    // Update act indicator
    const turnData = TURN_DATA[state.currentTurn - 1];
    document.getElementById('act-name').textContent = `Act ${turnData.act}: ${turnData.actName}`;
    document.getElementById('turn-counter').textContent = `Turn ${state.currentTurn}/15`;
    document.getElementById('progress-fill').style.width = `${(state.currentTurn / 15) * 100}%`;

    // Update stakeholder trust bars
    Object.keys(state.stakeholders).forEach(key => {
      const trust = state.stakeholders[key].trust;
      document.getElementById(`trust-${key}`).textContent = Math.round(trust);
      document.getElementById(`trust-fill-${key}`).style.width = `${trust}%`;

      // Color coding
      const fill = document.getElementById(`trust-fill-${key}`);
      if (trust >= 70) fill.style.background = 'linear-gradient(90deg, #00ff88, #00ffcc)';
      else if (trust >= 40) fill.style.background = 'linear-gradient(90deg, #ffaa00, #ff6600)';
      else fill.style.background = 'linear-gradient(90deg, #ff0066, #ff0000)';
    });

    // Update metrics panel
    const metricsContainer = document.getElementById('metrics-container');
    const visibleMetrics = turnData.metricVisibility || [];

    metricsContainer.innerHTML = '';
    visibleMetrics.forEach(metricKey => {
      const value = state.metrics[metricKey];
      const metricEl = document.createElement('div');
      metricEl.className = 'metric';
      metricEl.innerHTML = `
        <div class="metric-header">
          <span class="metric-name">${this.formatMetricName(metricKey)}</span>
          <span class="metric-value">${Math.round(value)}</span>
        </div>
        <div class="metric-bar">
          <div class="metric-bar-fill" style="width: ${value}%; background: ${this.getMetricColor(metricKey, value)}"></div>
        </div>
      `;
      metricsContainer.appendChild(metricEl);
    });

    // Insights are now shown as toast notifications, no need to update a widget
  }

  formatMetricName(key) {
    const names = {
      hype: "Hype",
      playerSentiment: "Player Sentiment",
      quality: "Quality",
      techDebt: "Tech Debt",
      roadmapProgress: "Roadmap Progress",
      teamMorale: "Team Morale",
      execPatience: "Exec Patience",
      revenue: "Revenue",
      retention: "Retention"
    };
    return names[key] || key;
  }

  getMetricColor(metric, value) {
    if (metric === "techDebt") {
      return value > 70 ? '#ff0066' : '#00ffcc';
    }
    if (value > 70) return '#00ff88';
    if (value > 40) return '#ffaa00';
    return '#ff0066';
  }

  renderScene(turnData) {
    const container = document.getElementById('scene-container');

    container.innerHTML = `
      <div class="scene-turn">
        <h1 class="scene-title">${turnData.scene.title}</h1>
        <p class="scene-description">${turnData.scene.description}</p>
        <div class="decision-section">
          <div class="decision-prompt">${turnData.decision.prompt}</div>
          <div class="decision-options" id="decision-options">
            ${turnData.decision.options.map(opt => `
              <button class="decision-btn" data-option-id="${opt.id}">
                <span class="decision-icon">${opt.icon}</span>
                <div class="decision-label">${opt.label}</div>
                <div class="decision-description">${opt.description}</div>
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Add click handlers
    turnData.decision.options.forEach(opt => {
      const btn = document.querySelector(`[data-option-id="${opt.id}"]`);
      btn.addEventListener('click', () => {
        // Disable all buttons
        document.querySelectorAll('.decision-btn').forEach(b => b.disabled = true);

        // Process decision
        game.turnManager.processDecision(opt, turnData);
      });
    });
  }

  showReactionBubble(stakeholder, message) {
    const container = document.getElementById('reactions-container');
    const bubble = document.createElement('div');
    bubble.className = `reaction-bubble ${stakeholder}`;
    bubble.innerHTML = `<strong>${state.stakeholders[stakeholder].name}:</strong> ${message}`;

    container.appendChild(bubble);

    setTimeout(() => {
      bubble.remove();
    }, 3000);
  }

  async showEventNotification(event) {
    const container = document.getElementById('reactions-container');
    const notification = document.createElement('div');
    notification.className = 'reaction-bubble';
    notification.style.borderLeftColor = '#9d00ff';
    notification.innerHTML = `<strong>🎲 ${event.name}:</strong> ${event.description}`;

    container.appendChild(notification);

    await game.animationController.wait(4000);
    notification.remove();
  }

  showInsightUnlock(card) {
    console.log('💡 Showing insight unlock:', card.title);

    // Create toast notification for insight
    const container = document.getElementById('insights-container');
    const toast = document.createElement('div');
    toast.className = 'insight-toast';
    toast.innerHTML = `
      <div class="insight-toast-icon">💡</div>
      <div class="insight-toast-content">
        <div class="insight-toast-title">${card.title}</div>
        <div class="insight-toast-desc">${card.description}</div>
      </div>
    `;

    // Click to dismiss
    toast.addEventListener('click', () => {
      toast.style.animation = 'fadeOutRight 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    });

    container.appendChild(toast);

    // Auto-remove toast after animation completes
    setTimeout(() => {
      if (toast.parentElement) {
        toast.remove();
      }
    }, 5000);
  }

  showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'insight-notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: linear-gradient(135deg, rgba(147, 51, 234, 0.95), rgba(255, 0, 102, 0.95));
      border: 2px solid var(--color-neon-purple);
      border-radius: 8px;
      padding: 1rem 1.5rem;
      font-weight: 600;
      font-size: 0.95rem;
      z-index: 999;
      animation: slideInRight 0.4s ease, fadeOut 0.4s ease 2.6s;
      box-shadow: 0 6px 25px rgba(147, 51, 234, 0.6);
    `;
    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 3000);
  }

  async animateMetricChanges(changes) {
    // Re-render HUD with animated changes
    this.renderHUD();

    await game.animationController.wait(2000);
  }

  renderPostmortem(scoreData) {
    const content = document.querySelector('.postmortem-content');
    content.innerHTML = `
      <div class="postmortem-header">
        <h1>Mission Complete</h1>
        <div class="final-score">${scoreData.total}/100</div>
      </div>

      <div class="archetype-section">
        <h2>You are: ${scoreData.archetype}</h2>
        <p class="archetype-description">${ARCHETYPE_DESCRIPTIONS[scoreData.archetype]}</p>
      </div>

      <div class="breakdown-section">
        <h3>Score Breakdown</h3>
        ${this.buildBreakdownBars(scoreData.breakdown)}
      </div>

      <div class="turning-points">
        <h3>Key Moments</h3>
        ${scoreData.turningPoints.map(tp => `
          <div class="turning-point">
            <div class="turning-point-turn">Turn ${tp.turn}</div>
            <div class="turning-point-decision">${tp.decision}</div>
            <div class="turning-point-impact">${tp.impact}</div>
          </div>
        `).join('')}
      </div>

      <div class="epilogue">
        <h3>Six Months Later...</h3>
        <p class="satirical-text">${scoreData.epilogue}</p>
      </div>

      <div class="advanced-analysis-section">
        <button class="advanced-analysis-btn" id="toggle-analysis">
          <span class="analysis-icon">📊</span>
          View Advanced Analysis
          <span class="analysis-arrow">▼</span>
        </button>
        <div class="advanced-analysis-content hidden" id="advanced-analysis">
          <!-- Will be populated when clicked -->
        </div>
      </div>

      <button class="play-again-btn" onclick="restartGame()">Play Again</button>
    `;

    // Add event listener for advanced analysis toggle
    setTimeout(() => {
      const toggleBtn = document.getElementById('toggle-analysis');
      const analysisContent = document.getElementById('advanced-analysis');
      let isExpanded = false;

      toggleBtn.addEventListener('click', () => {
        isExpanded = !isExpanded;

        if (isExpanded) {
          // Generate and show analysis
          analysisContent.innerHTML = this.generateAdvancedAnalysis(scoreData);
          analysisContent.classList.remove('hidden');
          toggleBtn.innerHTML = `
            <span class="analysis-icon">📊</span>
            Hide Advanced Analysis
            <span class="analysis-arrow">▲</span>
          `;
          toggleBtn.classList.add('expanded');
        } else {
          // Hide analysis
          analysisContent.classList.add('hidden');
          toggleBtn.innerHTML = `
            <span class="analysis-icon">📊</span>
            View Advanced Analysis
            <span class="analysis-arrow">▼</span>
          `;
          toggleBtn.classList.remove('expanded');
        }
      });
    }, 100);
  }

  generateAdvancedAnalysis(scoreData) {
    const analysis = {
      strengths: this.analyzeStrengths(scoreData),
      weaknesses: this.analyzeWeaknesses(scoreData),
      recommendations: this.generateRecommendations(scoreData),
      stakeholderAnalysis: this.analyzeStakeholders(),
      metricsAnalysis: this.analyzeMetrics()
    };

    return `
      <div class="analysis-grid">
        <div class="analysis-card success">
          <div class="analysis-card-header">
            <span class="analysis-card-icon">✅</span>
            <h4>What Went Well</h4>
          </div>
          <ul class="analysis-list">
            ${analysis.strengths.map(s => `<li>${s}</li>`).join('')}
          </ul>
        </div>

        <div class="analysis-card warning">
          <div class="analysis-card-header">
            <span class="analysis-card-icon">⚠️</span>
            <h4>Areas for Improvement</h4>
          </div>
          <ul class="analysis-list">
            ${analysis.weaknesses.map(w => `<li>${w}</li>`).join('')}
          </ul>
        </div>

        <div class="analysis-card info">
          <div class="analysis-card-header">
            <span class="analysis-card-icon">💡</span>
            <h4>Strategic Recommendations</h4>
          </div>
          <ul class="analysis-list">
            ${analysis.recommendations.map(r => `<li>${r}</li>`).join('')}
          </ul>
        </div>

        <div class="analysis-card stakeholders">
          <div class="analysis-card-header">
            <span class="analysis-card-icon">👥</span>
            <h4>Stakeholder Deep Dive</h4>
          </div>
          <div class="stakeholder-analysis">
            ${analysis.stakeholderAnalysis}
          </div>
        </div>

        <div class="analysis-card metrics">
          <div class="analysis-card-header">
            <span class="analysis-card-icon">📈</span>
            <h4>Metrics Analysis</h4>
          </div>
          <div class="metrics-analysis">
            ${analysis.metricsAnalysis}
          </div>
        </div>
      </div>
    `;
  }

  analyzeStrengths(scoreData) {
    const strengths = [];
    const breakdown = scoreData.breakdown;

    if (breakdown.northStarScore >= 70) {
      strengths.push(`<strong>North Star Excellence:</strong> You achieved ${Math.round(breakdown.northStarScore)}% on your primary goal "${state.northStarGoal}". Clear vision execution.`);
    }
    if (breakdown.stakeholderScore >= 70) {
      strengths.push(`<strong>Strong Relationships:</strong> Maintained ${Math.round(breakdown.stakeholderScore)}% average stakeholder trust. Excellent political navigation.`);
    }
    if (breakdown.qualityScore >= 70) {
      strengths.push(`<strong>Quality Focus:</strong> Delivered ${Math.round(breakdown.qualityScore)}% quality metrics. The product integrity shows.`);
    }
    if (breakdown.executionScore >= 70) {
      strengths.push(`<strong>Execution Power:</strong> ${Math.round(breakdown.executionScore)}% roadmap completion. You shipped consistently.`);
    }

    if (state.metrics.teamMorale >= 70) {
      strengths.push(`<strong>Team Health:</strong> Kept team morale at ${Math.round(state.metrics.teamMorale)}%. Happy teams build great products.`);
    }

    if (strengths.length === 0) {
      strengths.push("You navigated difficult trade-offs. Every PM makes tough choices.");
    }

    return strengths;
  }

  analyzeWeaknesses(scoreData) {
    const weaknesses = [];
    const breakdown = scoreData.breakdown;

    if (breakdown.northStarScore < 50) {
      weaknesses.push(`<strong>North Star Misalignment:</strong> Only ${Math.round(breakdown.northStarScore)}% achievement on "${state.northStarGoal}". Consider if your decisions aligned with this goal.`);
    }
    if (breakdown.stakeholderScore < 50) {
      weaknesses.push(`<strong>Relationship Strain:</strong> ${Math.round(breakdown.stakeholderScore)}% stakeholder trust. Building consensus is crucial for PM success.`);
    }
    if (breakdown.qualityScore < 50) {
      weaknesses.push(`<strong>Quality Concerns:</strong> ${Math.round(breakdown.qualityScore)}% quality metrics. Technical debt and player satisfaction suffered.`);
    }
    if (breakdown.executionScore < 50) {
      weaknesses.push(`<strong>Execution Gaps:</strong> ${Math.round(breakdown.executionScore)}% roadmap completion. Scope management needed attention.`);
    }

    if (state.metrics.techDebt >= 70) {
      weaknesses.push(`<strong>Technical Debt Crisis:</strong> ${Math.round(state.metrics.techDebt)}% tech debt. This will haunt future development.`);
    }
    if (state.metrics.teamMorale < 40) {
      weaknesses.push(`<strong>Team Burnout:</strong> Morale at ${Math.round(state.metrics.teamMorale)}%. Sustainable pace matters for long-term success.`);
    }

    if (weaknesses.length === 0) {
      weaknesses.push("Minor optimization opportunities exist, but overall solid execution.");
    }

    return weaknesses;
  }

  generateRecommendations(scoreData) {
    const recommendations = [];
    const breakdown = scoreData.breakdown;

    // North Star recommendations
    if (breakdown.northStarScore < 70) {
      switch(state.northStarGoal) {
        case "revenue":
          recommendations.push("💰 <strong>Revenue Focus:</strong> Prioritize monetization features earlier. Balance whale-friendly mechanics with player goodwill.");
          break;
        case "acclaim":
          recommendations.push("🏆 <strong>Critical Success:</strong> Invest more in quality and innovation. Take calculated risks on creative vision.");
          break;
        case "liveops":
          recommendations.push("🔄 <strong>Live Ops Strategy:</strong> Build scalable systems early. Content pipeline and retention mechanics need early investment.");
          break;
        case "playerlove":
          recommendations.push("❤️ <strong>Community First:</strong> Engage players early and often. Transparency and authenticity build lasting communities.");
          break;
      }
    }

    // Stakeholder recommendations
    const lowestStakeholder = Object.entries(state.stakeholders)
      .sort((a, b) => a[1].trust - b[1].trust)[0];
    if (lowestStakeholder[1].trust < 50) {
      const stakeholderNames = { cto: "CTO", creative: "Creative Director", marketing: "Marketing Lead", cfo: "CFO" };
      recommendations.push(`🤝 <strong>Repair ${stakeholderNames[lowestStakeholder[0]]} Relationship:</strong> At ${Math.round(lowestStakeholder[1].trust)}% trust, this stakeholder felt ignored. Balance competing interests better.`);
    }

    // Quality recommendations
    if (state.metrics.quality < 60 || state.metrics.techDebt > 60) {
      recommendations.push("🔧 <strong>Quality Investment:</strong> Technical excellence compounds. Allocate more time for refactoring and testing.");
    }

    // Execution recommendations
    if (state.metrics.roadmapProgress < 60) {
      recommendations.push("📋 <strong>Scope Management:</strong> Cut ruthlessly. Shipping 70% of features at 100% quality beats 100% of features at 70% quality.");
    }

    // Team recommendations
    if (state.metrics.teamMorale < 60) {
      recommendations.push("👨‍💻 <strong>Team Sustainability:</strong> Crunch doesn't scale. Protect team health—burned out teams ship bugs, not features.");
    }

    if (recommendations.length === 0) {
      recommendations.push("🎯 <strong>Optimization:</strong> Fine-tune decision timing. Small changes in sequencing can create compounding benefits.");
      recommendations.push("📊 <strong>Data-Driven:</strong> Use metrics to validate assumptions. What gets measured gets managed.");
    }

    return recommendations;
  }

  analyzeStakeholders() {
    const stakeholders = state.stakeholders;
    const analysis = Object.entries(stakeholders).map(([key, data]) => {
      const names = { cto: "CTO", creative: "Creative Director", marketing: "Marketing Lead", cfo: "CFO" };
      const trust = Math.round(data.trust);
      const status = trust >= 70 ? "Strong Ally" : trust >= 50 ? "Neutral" : trust >= 30 ? "Concerned" : "Antagonistic";
      const color = trust >= 70 ? "#00ff88" : trust >= 50 ? "#ffaa00" : "#ff0066";

      return `
        <div class="stakeholder-detail">
          <div class="stakeholder-detail-header">
            <span class="stakeholder-detail-name">${names[key]}</span>
            <span class="stakeholder-detail-status" style="color: ${color}">${status} (${trust}%)</span>
          </div>
          <div class="stakeholder-detail-bar">
            <div class="stakeholder-detail-fill" style="width: ${trust}%; background: ${color}"></div>
          </div>
        </div>
      `;
    }).join('');

    return analysis;
  }

  analyzeMetrics() {
    const metrics = state.metrics;
    const criticalMetrics = [
      { key: 'quality', name: 'Quality', inverse: false },
      { key: 'techDebt', name: 'Tech Debt', inverse: true },
      { key: 'teamMorale', name: 'Team Morale', inverse: false },
      { key: 'playerSentiment', name: 'Player Sentiment', inverse: false },
      { key: 'roadmapProgress', name: 'Roadmap Progress', inverse: false }
    ];

    return criticalMetrics.map(({ key, name, inverse }) => {
      const value = Math.round(metrics[key]);
      const isGood = inverse ? value < 50 : value >= 70;
      const isBad = inverse ? value >= 70 : value < 40;
      const status = isGood ? "Excellent" : isBad ? "Critical" : "Moderate";
      const color = isGood ? "#00ff88" : isBad ? "#ff0066" : "#ffaa00";

      return `
        <div class="metric-detail">
          <div class="metric-detail-header">
            <span class="metric-detail-name">${name}</span>
            <span class="metric-detail-value" style="color: ${color}">${value}% - ${status}</span>
          </div>
          <div class="metric-detail-bar">
            <div class="metric-detail-fill" style="width: ${value}%; background: ${color}"></div>
          </div>
        </div>
      `;
    }).join('');
  }

  buildBreakdownBars(breakdown) {
    return Object.entries(breakdown).map(([key, value]) => `
      <div class="breakdown-bar">
        <div class="breakdown-label">
          <span>${this.formatBreakdownName(key)}</span>
          <span>${Math.round(value)}/100</span>
        </div>
        <div class="breakdown-bar-bg">
          <div class="breakdown-bar-fill" style="width: ${value}%"></div>
        </div>
      </div>
    `).join('');
  }

  formatBreakdownName(key) {
    const names = {
      northStarScore: "North Star Achievement",
      stakeholderScore: "Stakeholder Management",
      qualityScore: "Quality Metrics",
      executionScore: "Roadmap Execution"
    };
    return names[key] || key;
  }
}

class AnimationController {
  async showCinematic(sceneData) {
    const container = document.getElementById('scene-container');

    // Fade out
    container.classList.add('fade-out');
    await this.wait(500);

    // Clear and update
    container.innerHTML = `
      <div class="scene-turn">
        <h1 class="scene-title">${sceneData.title}</h1>
        <p class="scene-description">${sceneData.description}</p>
      </div>
    `;

    // Fade in
    container.classList.remove('fade-out');
    container.classList.add('fade-in');
    await this.wait(sceneData.duration || 2500);
    container.classList.remove('fade-in');
  }

  wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// ===== 6. MUSIC MANAGER =====

class MusicManager {
  constructor() {
    this.music = document.getElementById('background-music');
    this.isMuted = false;
    this.volume = 0.3; // Default volume (30%)

    // Set volume
    if (this.music) {
      this.music.volume = this.volume;
    }

    // Setup toggle button
    this.setupToggleButton();
  }

  setupToggleButton() {
    const toggleBtn = document.getElementById('music-toggle');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
      this.toggleMute();
    });
  }

  play() {
    if (!this.music) {
      console.warn('Music element not found');
      return;
    }

    if (!this.isMuted) {
      this.music.play().catch(err => {
        console.log('Audio playback failed (user interaction required):', err);
      });
      console.log('🎵 Music playing');
    }
  }

  stop() {
    if (this.music) {
      this.music.pause();
      this.music.currentTime = 0;
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    const toggleBtn = document.getElementById('music-toggle');

    if (this.isMuted) {
      // Mute music
      if (this.music) {
        this.music.pause();
      }
      toggleBtn.textContent = '🔇';
      toggleBtn.classList.add('muted');
      toggleBtn.title = 'Unmute Music';
      console.log('🔇 Music muted');
    } else {
      // Unmute and resume music
      if (this.music) {
        this.music.play().catch(err => {
          console.log('Audio playback failed:', err);
        });
      }
      toggleBtn.textContent = '🔊';
      toggleBtn.classList.remove('muted');
      toggleBtn.title = 'Mute Music';
      console.log('🔊 Music unmuted');
    }
  }

  setVolume(volume) {
    this.volume = Math.max(0, Math.min(1, volume));
    if (this.music) {
      this.music.volume = this.volume;
    }
  }
}

// ===== 7. UTILITIES =====

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function randomChoice(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function saveGame() {
  try {
    localStorage.setItem('gta6pm_save', JSON.stringify(state));
  } catch (e) {
    console.warn("Failed to save game:", e);
  }
}

function restartGame() {
  console.log('🔄 Restarting game...');

  // Clear saved game
  localStorage.removeItem('gta6pm_save');

  // Reload the page
  window.location.reload();
}

function loadGame() {
  try {
    const saved = localStorage.getItem('gta6pm_save');
    if (saved) {
      const loadedState = JSON.parse(saved);

      // Validate the loaded state
      if (loadedState.currentTurn && loadedState.currentTurn >= 1 && loadedState.currentTurn <= 15) {
        Object.assign(state, loadedState);
        console.log("💾 Loaded saved game from turn", loadedState.currentTurn);
        return true;
      } else {
        console.warn("⚠️ Invalid save data, starting fresh");
        localStorage.removeItem('gta6pm_save');
      }
    }
  } catch (e) {
    console.warn("Failed to load game:", e);
    localStorage.removeItem('gta6pm_save'); // Clear corrupted save
  }
  return false;
}

// ===== 7. INITIALIZATION =====

let game;
let musicManager;

document.addEventListener('DOMContentLoaded', () => {
  console.log("🎮 DOM loaded, starting initialization...");

  try {
    // Initialize music manager
    musicManager = new MusicManager();
    console.log("✅ Music manager initialized");

    // Function to hide loading screen and show game
    const hideLoadingScreen = () => {
      console.log("⏱️ Hiding loading screen...");
      const loadingScreen = document.getElementById('loading-screen');
      const gameRoot = document.getElementById('game-root');

      if (!loadingScreen || !gameRoot) {
        console.error("❌ Could not find loading-screen or game-root elements!");
        return;
      }

      loadingScreen.classList.add('hidden');
      gameRoot.classList.remove('hidden');

      // Start music when game is visible
      musicManager.play();

      console.log("✅ Loading screen hidden, game root visible");
    };

    // Add skip button handler
    const skipBtn = document.getElementById('skip-loading');
    if (skipBtn) {
      skipBtn.addEventListener('click', () => {
        console.log("⏭️ User skipped loading screen");
        hideLoadingScreen();
      });
    }

    // Add restart button handler
    const restartBtn = document.getElementById('restart-btn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to restart? All progress will be lost.')) {
          restartGame();
        }
      });
      console.log("✅ Restart button ready");
    }


    // Hide loading screen after short delay
    setTimeout(hideLoadingScreen, 1500);

    // Initialize game
    console.log("🎲 Creating GameEngine...");
    game = new GameEngine();
    console.log("✅ GameEngine created");

    game.init();
    console.log("✅ Game initialized");
  } catch (error) {
    console.error("❌ CRITICAL ERROR during initialization:", error);
    alert("Game failed to load. Check console for details. Error: " + error.message);
  }
});
