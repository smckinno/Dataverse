import * as React from 'react';
import {
  PageSection,
  Split,
  SplitItem,
  Title,
  Tabs,
  Tab,
  TabTitleText,
  Button,
  Divider,
  Grid,
  GridItem,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Modal,
} from '@patternfly/react-core';
import { ArrowRightIcon, CaretRightIcon, CaretDownIcon, WrenchIcon, ChartLineIcon, RobotIcon, RocketIcon, LockIcon, UsersIcon, GraduationCapIcon, SearchIcon, ArrowsAltIcon, CommentsIcon, CodeBranchIcon, BookOpenIcon, FlaskIcon, BuildingIcon, ExternalLinkAltIcon, DesktopIcon, UserIcon, CogsIcon, MapMarkerAltIcon, ChartBarIcon } from '@patternfly/react-icons';

const Dataverse: React.FunctionComponent = () => {
  const [activeTabKey, setActiveTabKey] = React.useState<string | number>(0);
  const [showBuilderGuide, setShowBuilderGuide] = React.useState<boolean>(false);
  const [showConsumerGuide, setShowConsumerGuide] = React.useState<boolean>(false);
  const [showAgentGuide, setShowAgentGuide] = React.useState<boolean>(false);
  const [isVideoOpen, setIsVideoOpen] = React.useState<boolean>(false);

  return (
    <>
      // ===== Header: page title =====
      <PageSection hasBodyWrapper={false} className="dv-body-text-20">
        
        <Title headingLevel="h1" size="3xl" >Dataverse</Title> 
      </PageSection>

      // ===== Tabs at top of page =====
      <PageSection hasBodyWrapper={false} className="dv-body-text-20">
        <Split hasGutter>
          <SplitItem isFilled>
            <Tabs activeKey={activeTabKey} onSelect={(_, key) => setActiveTabKey(key)} aria-label="Dataverse page tabs">
              <Tab eventKey={0} title={<TabTitleText>Home</TabTitleText>} />
              <Tab eventKey={1} title={<TabTitleText>Data + AI Strategy</TabTitleText>} />
              <Tab eventKey={2} title={<TabTitleText>Dataverse</TabTitleText>} />
              <Tab eventKey={3} title={<TabTitleText>AI at Red Hat</TabTitleText>} />
              <Tab eventKey={4} title={<TabTitleText>TeleSense</TabTitleText>} />
              <Tab eventKey={5} title={<TabTitleText>Development</TabTitleText>} />
            </Tabs>
          </SplitItem>
        </Split>
      </PageSection>

      // ===== Intro: description + explainer video button =====
      <PageSection hasBodyWrapper={false}>
        {activeTabKey === 2 && (
          <div>
            <p className="rh-display-24" style={{ fontWeight: 400 }}>
              Dataverse is Red Hat's comprehensive data and AI platform, making data accessible for everyone. It uses our InnerSource community to help discover, build, and deploy data solutions.
            </p>
            <Button className="mt-24px" variant="primary" icon={<ArrowRightIcon />} iconPosition="end" onClick={() => setIsVideoOpen(true)}>
              Watch explainer video
            </Button>
          </div>
        )}
      </PageSection>

      {activeTabKey === 2 && (
        <>
      {/* ===== Modal: explainer video ===== */}
      <Modal
        className="dv-video-modal"
        isOpen={isVideoOpen}
        title="Explainer video"
        onClose={() => setIsVideoOpen(false)}
        variant="large"
        width="80vw"
      >
        <div className="dv-video-modal__content">
          <div className="dv-video-modal__frame" style={{ position: 'relative', paddingTop: '56.25%' }}>
            <iframe
              title="Dataverse explainer"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            />
          </div>
        </div>
      </Modal>
          
          // ===== Choose your path: three feature cards =====
          <Divider style={{marginTop: '24px'}} />
          <PageSection variant="secondary" hasBodyWrapper={true} className="dv-body-text-20 pb-48px"> 
            <Title headingLevel="h2" size="2xl" 
            style={{ marginTop: 24}}>Choose your path</Title>
            <p style={{ marginTop: 8 }}>Dataverse serves anyone in Red Hat. View the different roles below to learn more.</p>
            <Grid hasGutter style={{ marginTop: 24 }} className="dv-grid">
              <GridItem sm={12} md={12} lg={4}>
                <Card className={`dv-card ${showBuilderGuide ? 'dv-card--selected' : ''}`}>
                  <CardHeader>
                    <span className="dv-card__icon" aria-hidden>
                      <WrenchIcon />
                    </span>
                  </CardHeader>
                  <CardTitle>
                    <Title headingLevel="h3" size="xl">Data builders</Title>
                  </CardTitle>
                  <CardBody>
                    Build trusted data products on a modern data platform. Publish, manage, and scale your data solutions effortlessly.
                  </CardBody>
                  <CardFooter>
                    <Button variant="primary" icon={showBuilderGuide ? <CaretDownIcon /> : <CaretRightIcon />} iconPosition="end" onClick={() => setShowBuilderGuide((prev) => { const next = !prev; if (next) setShowConsumerGuide(false); return next; })}>
                      Start building data
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem sm={12} md={12} lg={4}>
                <Card className={`dv-card ${showConsumerGuide ? 'dv-card--selected' : ''}`}>
                  <CardHeader>
                    <span className="dv-card__icon" aria-hidden>
                      <ChartLineIcon />
                    </span>
                  </CardHeader>
                  <CardTitle>
                    <Title headingLevel="h3" size="xl">Data consumers</Title>
                  </CardTitle>
                  <CardBody>
                    Easily discover and access trusted data for your models, reports, and Insights. To access the data, view the Atlan catalogue and Dataverse console.
                  </CardBody>
                  <CardFooter>
                    <Button variant="primary" icon={showConsumerGuide ? <CaretDownIcon /> : <CaretRightIcon />} iconPosition="end" onClick={() => setShowConsumerGuide((prev) => { const next = !prev; if (next) { setShowBuilderGuide(false); setShowAgentGuide(false);} return next; })}>
                      Discover data products
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem sm={12} md={12} lg={4}>
                <Card className={`dv-card ${showAgentGuide ? 'dv-card--selected' : ''}`}>
                  <CardHeader>
                    <span className="dv-card__icon" aria-hidden>
                      <RobotIcon />
                    </span>
                  </CardHeader>
                  <CardTitle>
                    <Title headingLevel="h3" size="xl">AI Agent builders</Title>
                  </CardTitle>
                  <CardBody>
                    Build and publish agents to production without managing scalable platform infrastructure. Access MCP servers and other miscellaneous points.
                  </CardBody>
                  <CardFooter>
                    <Button variant="primary" icon={showAgentGuide ? <CaretDownIcon /> : <CaretRightIcon />} iconPosition="end" onClick={() => setShowAgentGuide((prev) => { const next = !prev; if (next) { setShowBuilderGuide(false); setShowConsumerGuide(false);} return next; })}>
                      Build an AI agent
                    </Button>
                  </CardFooter>
                </Card>
              </GridItem>
            </Grid>
          </PageSection>

          // ===== Builder guide (expands from first card) =====
          {showBuilderGuide && (
            <PageSection variant="secondary" hasBodyWrapper={true} className="dv-body-text-20 pb-48px">
              <Card className="dv-wide-card">
                <Title headingLevel="h2" size="xl">Data builders getting started</Title>
                <Grid hasGutter style={{ marginTop: 24 }}>
                  <GridItem sm={12} md={4}>
                    <div className="dv-step">
                      <div className="dv-step__icon"><BookOpenIcon /></div>
                      <Title headingLevel="h3" size="lg">Learn</Title>
                      <p>Start the required learning paths for any associate.</p>
                      <Button variant="secondary" icon={<ExternalLinkAltIcon />} iconPosition="end">Dataverse 101</Button>
                    </div>
                  </GridItem>
                  <GridItem sm={12} md={4}>
                    <div className="dv-step">
                      <div className="dv-step__icon"><FlaskIcon /></div>
                      <Title headingLevel="h3" size="lg">Try</Title>
                      <p>Explore hands on learning for any developer role.</p>
                      <Button variant="secondary" icon={<ExternalLinkAltIcon />} iconPosition="end">Hello Dataverse</Button>
                      <p className="dv-footnote">*VPN required</p>
                    </div>
                  </GridItem>
                  <GridItem sm={12} md={4}>
                    <div className="dv-step">
                      <div className="dv-step__icon"><BuildingIcon /></div>
                      <Title headingLevel="h3" size="lg">Build</Title>
                      <p>Start development of your data product.</p>
                      <Button variant="secondary" icon={<ExternalLinkAltIcon />} iconPosition="end">Start development</Button>
                      <p className="dv-footnote">*VPN required</p>
                    </div>
                  </GridItem>
                </Grid>
              </Card>
            </PageSection>
          )}

          // ===== Consumer guide (expands from second card) =====
          {showConsumerGuide && (
            <PageSection variant="secondary" hasBodyWrapper={true} className="dv-body-text-20 pb-48px">
              <Card className="dv-wide-card">
                <Title headingLevel="h2" size="xl">Data product sources</Title>
                <Grid hasGutter style={{ marginTop: 24 }}>
                  <GridItem sm={12} md={6}>
                    <div>
                      <div className="dv-source-heading"><DesktopIcon /><Title headingLevel="h3" size="lg">Dataverse console</Title></div>
                      <p>View data products and cost operations.</p>
                      <div className="dv-video-placeholder" />
                      <Button variant="link" icon={<ExternalLinkAltIcon />} iconPosition="end" style={{ marginTop: 12 }}>Explore Dataverse console</Button>
                    </div>
                  </GridItem>
                  <GridItem sm={12} md={6} className="dv-col-divider">
                    <div>
                      <div className="dv-source-heading"><BookOpenIcon /><Title headingLevel="h3" size="lg">Atlan catalogue</Title></div>
                      <p>Discover your most valued assets.</p>
                      <div className="dv-video-placeholder" />
                      <Button variant="link" icon={<ExternalLinkAltIcon />} iconPosition="end" style={{ marginTop: 12 }}>Explore Atlan catalogue</Button>
                    </div>
                  </GridItem>
                </Grid>
              </Card>
            </PageSection>
          )}

          // ===== Agent guide (expands from third card) =====
          {showAgentGuide && (
            <PageSection variant="secondary" hasBodyWrapper={true} className="dv-body-text-20 pb-48px">
              <Card className="dv-wide-card">
                <Title headingLevel="h2" size="xl">AI agents</Title>
                <p style={{ marginTop: 8 }}>
                  An AI agent is a conversational software application that acts as a gateway to data, allowing users to retrieve
                  information by asking questions in natural language. Access is currently available through Cursor, with a new, more
                  user-friendly interface planned for release in early Q4.
                </p>
                <Grid hasGutter style={{ marginTop: 24 }} className="dv-grid">
                  <GridItem sm={12} md={4}>
                    <Card className="dv-info-card">
                      <CardHeader>
                        <span className="dv-info-card__icon" aria-hidden>
                          <UserIcon />
                        </span>
                      </CardHeader>
                      <CardTitle>
                        <Title headingLevel="h3" size="lg">User interaction</Title>
                      </CardTitle>
                      <CardBody>
                        It allows both technical and non-technical users to access data and insights using natural language queries (NLQ). This
                        means you can simply ask for the data you need in plain language.
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem sm={12} md={4}>
                    <Card className="dv-info-card">
                      <CardHeader>
                        <span className="dv-info-card__icon" aria-hidden>
                          <CogsIcon />
                        </span>
                      </CardHeader>
                      <CardTitle>
                        <Title headingLevel="h3" size="lg">Functionality</Title>
                      </CardTitle>
                      <CardBody>
                        It can look up specific data points (accounts, opportunities, etc.), reference historical information (leads, campaigns), and
                        eventually produce interactive tables and reports in response to queries.
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem sm={12} md={4}>
                    <Card className="dv-info-card">
                      <CardHeader>
                        <span className="dv-info-card__icon" aria-hidden>
                          <UsersIcon />
                        </span>
                      </CardHeader>
                      <CardTitle>
                        <Title headingLevel="h3" size="lg">Democratization of Data</Title>
                      </CardTitle>
                      <CardBody>
                        The long-term vision is for the agent to democratize data access and empower every user by transforming data interactions
                        from a technical task into an intuitive conversation.
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem sm={12} md={6}>
                    <Card className="dv-info-card">
                      <CardHeader>
                        <span className="dv-info-card__icon" aria-hidden>
                          <MapMarkerAltIcon />
                        </span>
                      </CardHeader>
                      <CardTitle>
                        <Title headingLevel="h3" size="lg">Location</Title>
                      </CardTitle>
                      <CardBody>
                        It is currently available through Cursor, with a more user-friendly and intuitive interface coming in early Q4. The roadmap
                        includes a future browser-based chatbot.
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem sm={12} md={6}>
                    <Card className="dv-info-card">
                      <CardHeader>
                        <span className="dv-info-card__icon" aria-hidden>
                          <ChartBarIcon />
                        </span>
                      </CardHeader>
                      <CardTitle>
                        <Title headingLevel="h3" size="lg">Data access</Title>
                      </CardTitle>
                      <CardBody>
                        Its primary function is to retrieve data for the user. In its initial use case, it provides continued access to historical data
                        from Salesforce Legacy.
                      </CardBody>
                    </Card>
                  </GridItem>
                </Grid>
                <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: 16 }}>
                  <Button variant="link" icon={<CaretRightIcon />} iconPosition="end">Learn more</Button>
                </div>
              </Card>
            </PageSection>
          )}
          
          // ===== Why choose Dataverse: six compact cards =====
          <Divider style={{marginBottom: '24px'}} />
          <PageSection className="dv-body-text-20">

            <Title headingLevel="h2" size='2xl' >Why choose Dataverse?</Title>
            <p style={{marginTop: 8}}> Over 50 data products. All InnerSource. All easily accessible to any Red hatter. </p>
            <Grid hasGutter style={{ marginTop: 24 }} className="dv-grid">
              <GridItem sm={12} md={6} lg={4}>
                <Card className="dv-compact-card">
                  <CardHeader>
                    <span className="dv-compact-card__icon" aria-hidden>
                      <RocketIcon />
                    </span>
                  </CardHeader>
                  <CardTitle>
                    <Title headingLevel="h3" size="lg">Modern platform</Title>
                  </CardTitle>
                  <CardBody>
                    Build on cutting-edge technology with cloud-native architecture.
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem sm={12} md={6} lg={4}>
                <Card className="dv-compact-card">
                  <CardHeader>
                    <span className="dv-compact-card__icon" aria-hidden>
                      <LockIcon />
                    </span>
                  </CardHeader>
                  <CardTitle>
                    <Title headingLevel="h3" size="lg">Trusted and secure</Title>
                  </CardTitle>
                  <CardBody>
                    Enterprise-grade security and governance built in.
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem sm={12} md={6} lg={4}>
                <Card className="dv-compact-card">
                  <CardHeader>
                    <span className="dv-compact-card__icon" aria-hidden>
                      <UsersIcon />
                    </span>
                  </CardHeader>
                  <CardTitle>
                    <Title headingLevel="h3" size="lg">InnerSource community</Title>
                  </CardTitle>
                  <CardBody>
                    Engaging community of contributors and collaborators.
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem sm={12} md={6} lg={4}>
                <Card className="dv-compact-card">
                  <CardHeader>
                    <span className="dv-compact-card__icon" aria-hidden>
                      <GraduationCapIcon />
                    </span>
                  </CardHeader>
                  <CardTitle>
                    <Title headingLevel="h3" size="lg">Accessible for all skill levels</Title>
                  </CardTitle>
                  <CardBody>
                    Solutions for every technical skill level.
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem sm={12} md={6} lg={4}>
                <Card className="dv-compact-card">
                  <CardHeader>
                    <span className="dv-compact-card__icon" aria-hidden>
                      <SearchIcon />
                    </span>
                  </CardHeader>
                  <CardTitle>
                    <Title headingLevel="h3" size="lg">Quick discovery</Title>
                  </CardTitle>
                  <CardBody>
                    Powerful search and catalog capabilities with Atlan integration.
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem sm={12} md={6} lg={4}>
                <Card className="dv-compact-card">
                  <CardHeader>
                    <span className="dv-compact-card__icon" aria-hidden>
                      <ArrowsAltIcon />
                    </span>
                  </CardHeader>
                  <CardTitle>
                    <Title headingLevel="h3" size="lg">Scalable</Title>
                  </CardTitle>
                  <CardBody>
                    From prototype to production, it can handle any workload.
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>
          </PageSection>
          
          // ===== Community info: text + community cards =====
          <Divider style={{marginTop: '24px', marginBottom: '24px'}} />
        
        <PageSection className="dv-body-text-20">
            <Title headingLevel="h2" size='2xl'>Join the InnerSource community</Title>
            <p style={{ marginTop: 8 }}>InnerSource projects are developed like Open Source projects, but internal to Red Hat.</p>
            <Title headingLevel="h3" size="lg" style={{ marginTop: 24 }}>How we collaborate</Title>
            <ul className="dv-list" style={{ marginTop: 8 }}>
              <li>We drive engagement, discoverability and accountability within our data + AI communities</li>
              <li>Generate reusable, composable assets to be used across, between, and beyond domains</li>
              <li>Empower domain areas to act with agility and purpose, to enforce quality and to be compliant through digital contributions</li>
            </ul>
          </PageSection>
          
          <PageSection variant="secondary" hasBodyWrapper={true} className="dv-body-text-20 pb-48px">
            <Grid hasGutter className="dv-grid" style={{ marginTop: 24 }}>
              <GridItem sm={12} md={6} lg={6}>
                <Card className="dv-card">
                  <CardHeader>
                    <span className="dv-card__icon" aria-hidden>
                      <CommentsIcon />
                    </span>
                  </CardHeader>
                  <CardTitle>
                    <Title headingLevel="h3" size="xl">Slack channels</Title>
                  </CardTitle>
                  <CardBody>
                    Engage with the community, ask questions, and get support.
                    <ul className="dv-links-list" style={{ marginTop: 12 }}>
                      <li><a className="dv-link" href="#">#forum-dataverse</a> for general Q&A</li>
                      <li><a className="dv-link" href="#">#forum-data-products</a> for product conversations</li>
                      <li><a className="dv-link" href="#">#help-dataverse-platform</a> for platform help</li>
                    </ul>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem sm={12} md={6} lg={6}>
                <Card className="dv-card">
                  <CardHeader>
                    <span className="dv-card__icon" aria-hidden>
                      <CodeBranchIcon />
                    </span>
                  </CardHeader>
                  <CardTitle>
                    <Title headingLevel="h3" size="xl">GitLab projects</Title>
                  </CardTitle>
                  <CardBody>
                    Find our code and contribute to projects.
                    <ul className="dv-links-list" style={{ marginTop: 12 }}>
                      <li><a className="dv-link" href="#">data-products</a></li>
                      <li><a className="dv-link" href="#">ai</a></li>
                      <li><a className="dv-link" href="#">data-governance</a></li>
                    </ul>
                  </CardBody>
                </Card>
              </GridItem>
              <GridItem sm={12} md={6} lg={6}>
                <Card className="dv-card">
                  <CardHeader>
                    <span className="dv-card__icon" aria-hidden>
                      <BookOpenIcon />
                    </span>
                  </CardHeader>
                  <CardTitle>
                    <Title headingLevel="h3" size="xl">Documentation</Title>
                  </CardTitle>
                  <CardBody>
                    Explore comprehensive guides tailored to your role.
                    <ul className="dv-links-list" style={{ marginTop: 12 }}>
                      <li><a className="dv-link" href="#">Data docs</a> for data platform guidance</li>
                      <li><a className="dv-link" href="#">AI docs</a> for AI solutions</li>
                      <li><a className="dv-link" href="#">Getting started</a> with Dataverse</li>
                      <li><a className="dv-link" href="#">Data docs</a> for data platform guidance</li>
                    </ul>
                  </CardBody>
                </Card>
              </GridItem>
            </Grid>
          </PageSection>
          
        </>
      )}
    </>
  );
};

export { Dataverse };