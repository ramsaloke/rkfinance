
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Services } from '@/pages/Services';
import { Blog } from '@/pages/Blog';
import { Blogs } from '@/pages/Blogs';
import { Contact } from '@/pages/Contact';
import { Login } from '@/pages/Login';
import { Dashboard } from '@/pages/Dashboard';
import { SIPCalculator } from '@/pages/SIPCalculator';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sip-calculator" element={<SIPCalculator />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
